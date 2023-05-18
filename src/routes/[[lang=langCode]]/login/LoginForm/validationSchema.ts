import { z } from 'zod';
import { get } from 'svelte/store';
import { LL } from '$lib/i18n/i18n-svelte';

const validationSchema = z.object({
	email: z
		.string()
		.trim()
		.email({ message: get(LL).pages.login.incorrectEmail() }),
	password: z
		.string()
		.trim()
		.min(1, { message: get(LL).forms.validation.required() })
});

export type ValidationSchemaTypes = typeof validationSchema;

export default validationSchema;
