import { get } from 'svelte/store';
import { goto, preloadData, pushState } from '$app/navigation';
import { LL } from '$lib/i18n/i18n-svelte';
import navigation from '$lib/templates/Main/navigation.svelte';
import { Status } from '$lib/db/enums/Globals.enum';
import type { Locales } from '$lib/i18n/i18n-types';
import type { Basics } from '$lib/templates/BeverageList/Basics.d';

const searchByPhrase = async (phrase?: string, page?: number) => {
	if (phrase) {
		const pageValue = page && page > 1 ? '/' + page.toString() : '';
		const href = get(LL).link('/search/' + phrase.toLowerCase() + pageValue);
		const result = await preloadData(href);

		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, {
				selected: {
					...(result.data as {
						authenticated: boolean;
						beverages: Basics[];
						locale: Locales;
						total: number;
					}),
					page: page ?? 1,
					phrase
				}
			});
		} else {
			goto(href);
		}

		navigation.updateSearchStatus(Status.fulfilled);
		navigation.moveSearchHistory();
	} else {
		navigation.updateSearchStatus(Status.idle);
	}
};

export default searchByPhrase;
