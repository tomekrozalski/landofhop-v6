import { format } from 'date-fns';
import { translate } from '$lib/utils/api';
import { DateFormat } from '$lib/db/enums/Globals.enum';
import type { Locales } from '$lib/i18n/i18n-types.js';
import type { RawBeverage } from '$lib/db/types/RawBeverage.d';
import type { Basics } from '$lib/templates/BeverageList/Basics.d';

const beveragesToBasics =
	(language: Locales) =>
	({ added, badge, editorial, label, shortId }: RawBeverage): Basics => ({
		added: format(new Date(added), DateFormat[language]),
		badge,
		brand: {
			badge: label.general.brand.badge,
			name: translate(label.general.brand.name, language)
		},
		containerType: label.container.type,
		...(editorial?.photos?.cover &&
			editorial?.photos?.outlines?.cover && {
				coverImage: {
					height: editorial.photos.cover.height,
					width: editorial.photos.cover.width,
					outline: editorial.photos.outlines.cover
				}
			}),
		name: translate(label.general.name, language),
		shortId
	});

export default beveragesToBasics;
