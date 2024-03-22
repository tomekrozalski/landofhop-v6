import { z } from 'zod';
import { get } from 'svelte/store';
import { LL } from '$lib/i18n/i18n-svelte';
import type { TranslationFunctions } from '$lib/i18n/i18n-types';

const getValidationSchema = (LL: TranslationFunctions) =>
	z.object({
		badge: z.string().trim().min(3, { message: LL.forms.validation.required() }),
		name: z.object({
			value: z
				.string({
					required_error: 'Name is required',
					invalid_type_error: 'Name must be a string'
				})
				.min(2, { message: 'min 2' }),
			language: z.string().length(2, { message: LL.forms.validation.required() })
		})
	});

const validationSchema = getValidationSchema(get(LL));
export type ValidationSchemaTypes = typeof validationSchema;

export default getValidationSchema;
