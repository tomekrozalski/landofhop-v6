import type { Locales } from '$lib/i18n/i18n-types';
import type { RawLandingStats } from './RawLandingStats.d';

const normalizers = (rawData: RawLandingStats[], locale: Locales) => {
	return rawData;
};

export default normalizers;
