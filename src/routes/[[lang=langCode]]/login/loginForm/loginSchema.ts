import { z } from 'zod';
import { get } from 'svelte/store';
import { LL } from '$lib/i18n/i18n-svelte';

const schema = z.object({
	email: z
		.string({
			required_error: get(LL).forms.validation.required()
		})
		.trim()
		.email({ message: get(LL).pages.login.incorrectEmail() }),
	password: z
		.string({
			required_error: get(LL).forms.validation.required()
		})
		.trim()
});

export type LoginSchema = typeof schema;

export default schema;
