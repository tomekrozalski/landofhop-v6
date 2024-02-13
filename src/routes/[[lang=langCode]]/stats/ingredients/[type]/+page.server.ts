import { set } from 'lodash-es';
import { ingredients } from '$lib/db/mongo';
import { translate } from '$lib/utils/api';
import type { RawIngredient } from '$lib/db/types/RawIngredient.d';
import type { Ingredient } from '$lib/utils/adminDataTypes/Ingredient.d';
import type { IngredientTree } from './types.d';

export const prerender = true;

export const load = async ({ locals: { locale }, params, parent }) => {
	const badge = params.type as string;

	/* create navigation data */

	let navigation = await ingredients
		.find({ parent: { $exists: false } }, { projection: { badge: 1, occurrences: 1 } })
		.sort({ _id: 1 })
		.map(({ badge, occurrences }) => ({
			badge,
			occurrences: occurrences.withSuccessors
		}))
		.toArray();

	navigation = navigation.map((item) =>
		item.badge === badge ? { ...item, isActive: true } : item
	);

	/* create three data */
	/* step 1: generate path, eg. ['addition', 'vanilla', 'vanilla-extract'] */

	const path: string[] = [];

	async function generatePath(badge: string) {
		path.unshift(badge);

		const ingredientData = (await ingredients.findOne({ badge })) as RawIngredient;

		if (ingredientData.parent) {
			await generatePath(ingredientData.parent);
		}
	}

	await generatePath(badge);

	/* step 2: generate source object (main category object) */

	const sourceRaw = (await ingredients.findOne({ badge: path[0] })) as RawIngredient;

	const tree: IngredientTree = {
		badge: sourceRaw.badge,
		name: translate(sourceRaw.name, locale),
		occurrences: sourceRaw.occurrences
	};

	async function createSuccessors(index: number, target: string) {
		const successorsData = await ingredients
			.find(
				{ parent: path[index] },
				{ projection: { badge: 1, name: 1, occurrences: 1, successorsList: 1 } }
			)
			.sort({ 'occurrences.withSuccessors': -1 })
			.map(({ badge, name, occurrences, successorsList }) => ({
				badge,
				name: translate(name, locale),
				occurrences,
				successorsList
			}))
			.toArray();

		if (successorsData.length) {
			set(tree, target, successorsData);
		}

		if (path.length > index + 1) {
			const i = successorsData.findIndex((props) => props.badge === path[index + 1]);
			await createSuccessors(index + 1, `${target}[${i}].successors`);
		}
	}

	await createSuccessors(0, 'successors');

	const { authenticated } = await parent();
	let ingredientList: Ingredient[] | null = null;

	if (authenticated) {
		ingredientList = await ingredients
			.find(
				{},
				{
					projection: {
						_id: 0,
						badge: 1,
						name: 1,
						occurrences: 1,
						parent: 1,
						type: 1
					}
				}
			)
			.toArray();
	}

	return {
		statsData: {
			navigation,
			tree
		},
		ingredients: ingredientList
	};
};
