<script lang="ts">
	import { page } from '$app/stores';
	import LL from '$lib/i18n/i18n-svelte';
	import DD from './atoms/DescriptionDetails.svelte';
	import DT from './atoms/DescriptionTerm.svelte';
	import Label from './atoms/Label.svelte';
	import type {
		ContainerColor,
		ContainerMaterial,
		ContainerType
	} from '$lib/db/enums/Beverage.enum';

	const { type, material, color, value, unit } = $derived($page.data.details.container);

	function getType(type: ContainerType) {
		return $LL.pages.details.testimony.container.type[type]();
	}

	function getMaterial(material: ContainerMaterial) {
		return $LL.pages.details.testimony.container.material[material]();
	}

	function getColor(color: ContainerColor) {
		return $LL.pages.details.testimony.container.color[color]();
	}
</script>

<DT>
	{$LL.pages.details.testimony.container.title()}
</DT>
<DD>
	<Label>
		{getType(type)}
		{getMaterial(material)}
		{getColor(color)}
		{$LL.pages.details.testimony.container.value({ value, unit })}
	</Label>
</DD>
