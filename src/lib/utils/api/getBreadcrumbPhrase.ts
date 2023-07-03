import { format } from 'date-fns';
import pl from 'date-fns/locale/pl/index.js';
import type { Locales } from '$lib/i18n/i18n-types';

const getLatestMonth = (date: Date, language: Locales) =>
	format(date, 'LLLL yyyy', { locale: language === 'pl' ? pl : undefined });

export default getLatestMonth;
