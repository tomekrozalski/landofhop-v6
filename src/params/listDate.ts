import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return /^20[12]\d-[01]\d$/.test(param);
};
