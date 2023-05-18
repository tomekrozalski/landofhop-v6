import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import schema from './LoginForm/validationSchema';
import onSubmit from './LoginForm/onSubmit';

export const load = async () => {
	const form = await superValidate(schema);

	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event.request, schema);

		if (!form.valid) {
			return fail(400, { form });
		}

		return await onSubmit(event, form);
	}
};
