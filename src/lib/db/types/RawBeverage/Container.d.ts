import {
	ContainerColor,
	ContainerMaterial,
	ContainerType,
	ContainerUnit
} from '$lib/db/enums/Beverage.enum';

type Container = {
	color: ContainerColor;
	material: ContainerMaterial;
	unit: ContainerUnit;
	type: ContainerType;
	value: number;
	hasCork?: boolean;
	hasCapWireFlip?: boolean;
};

export default Container;
