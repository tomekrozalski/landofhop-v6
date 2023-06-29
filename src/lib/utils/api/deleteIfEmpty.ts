import { get, isEmpty, isNumber, unset } from 'lodash-es';

const deleteIfEmpty = (fields: string[], object: unknown) =>
	fields.forEach((field) => {
		if (isEmpty(get(object, field)) && !isNumber(get(object, field))) {
			unset(object, field);
		}
	});

export default deleteIfEmpty;
