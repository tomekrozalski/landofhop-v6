const formatListMonth = (date: Date, locale: string) =>
	new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date);

export default formatListMonth;
