<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLock, faLockOpen } from '@fortawesome/pro-solid-svg-icons';
	import { faEllipsis } from '@fortawesome/pro-regular-svg-icons';
	import { faMagnifyingGlass, faXmark } from '@fortawesome/pro-light-svg-icons';

	export let name: 'ellipsis' | 'login' | 'logout' | 'search' | 'xmark';

	const icons = {
		ellipsis: faEllipsis,
		login: faLock,
		logout: faLockOpen,
		search: faMagnifyingGlass,
    xmark: faXmark
	};
</script>

<Fa icon={icons[name]} {...$$restProps} />
