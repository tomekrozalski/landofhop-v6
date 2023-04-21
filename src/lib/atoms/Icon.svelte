<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLock, faLockOpen } from '@fortawesome/pro-solid-svg-icons';
	import {
		faEllipsis,
		faCheck,
		faXmark as faXmarkRegular
	} from '@fortawesome/pro-regular-svg-icons';
	import { faMagnifyingGlass, faXmark as faXmarkLight } from '@fortawesome/pro-light-svg-icons';

	export let name: 'check' | 'ellipsis' | 'login' | 'logout' | 'search' | 'xmark';
	export let style: 'solid' | 'regular' | 'light' = 'regular';

	const icons = {
		check: {
			light: null,
			regular: faCheck,
			solid: null
		},
		ellipsis: {
			light: null,
			regular: faEllipsis,
			solid: null
		},
		login: {
			light: null,
			regular: null,
			solid: faLock
		},
		logout: {
			light: null,
			regular: null,
			solid: faLockOpen
		},
		search: {
			light: faMagnifyingGlass,
			regular: null,
			solid: null
		},
		xmark: {
			light: faXmarkLight,
			regular: faXmarkRegular,
			solid: null
		}
	};
</script>

<Fa icon={icons[name][style]} {...$$restProps} />
