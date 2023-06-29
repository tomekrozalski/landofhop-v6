import { format } from 'date-fns';
import type { Locales } from '$lib/i18n/i18n-types';
import { translate } from '$lib/utils/api';
import { DateFormat } from '$lib/db/enums/Globals.enum';
import type { RawBasics } from '$lib/db/types/RawBasics.d';
import type { Basics } from './Basics.d';

const normalizeApiData = (rawBasics: RawBasics[], locale: Locales): Basics[] =>
	rawBasics.map(({ added, badge, brand, containerType, coverImage, name, shortId }) => ({
		shortId,
		badge,
		brand: {
			...brand,
			name: translate(brand.name, locale)
		},
		name: translate(name, locale),
		...(coverImage && {
			coverImage: {
				height: coverImage.height,
				width: coverImage.width,
				outline: coverImage.outlines
			}
		}),
		containerType,
		added: format(new Date(added), DateFormat[locale])
	}));

export default normalizeApiData;
