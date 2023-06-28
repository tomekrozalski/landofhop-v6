import { format } from 'date-fns';
import { translate } from '$lib/utils/api';
import { AppLanguage, DateFormat } from '$lib/db/enums/Globals.enum';
import type { RawBasics } from '$lib/db/types/RawBasics.d';
import type { Basics } from './Basics.d';

const normalizeApiData = (rawBasics: RawBasics[]): Basics[] =>
	rawBasics.map(({ added, badge, brand, containerType, coverImage, name, shortId }) => ({
		shortId,
		badge,
		brand: {
			...brand,
			name: translate(brand.name, AppLanguage.pl)
		},
		name: translate(name, AppLanguage.pl),
		...(coverImage && {
			coverImage: {
				height: coverImage.height,
				width: coverImage.width,
				outline: coverImage.outlines
			}
		}),
		containerType,
		added: format(new Date(added), DateFormat[AppLanguage.pl])
	}));

export default normalizeApiData;
