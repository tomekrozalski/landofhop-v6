import { format } from 'date-fns';
import locale from 'date-fns/locale';
import type { Locales } from '$lib/i18n/i18n-types';

const getLatestMonth = (date: Date, language: Locales) =>
	format(date, 'LLLL yyyy', { locale: language === 'pl' ? locale.pl : undefined });

export default getLatestMonth;
