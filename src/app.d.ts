type Locales = import('$lib/i18n/i18n-types').Locales;
type TranslationFunctions = import('$lib/i18n/i18n-types').TranslationFunctions;

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			authenticated: boolean;
			locale: Locales;
			LL: TranslationFunctions;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
