<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faLock,
		faLockOpen,
		faTriangleExclamation,
		faBadgeCheck
	} from '@fortawesome/pro-solid-svg-icons';
	import {
		faEllipsis,
		faCheck,
		faXmark as faXmarkRegular
	} from '@fortawesome/pro-regular-svg-icons';
	import { faMagnifyingGlass, faXmark as faXmarkLight } from '@fortawesome/pro-light-svg-icons';

	export let name:
		| 'badgeCheck'
		| 'check'
		| 'ellipsis'
		| 'login'
		| 'logout'
		| 'search'
		| 'warning'
		| 'xmark';
	export let style: 'solid' | 'regular' | 'light' = 'regular';

	const icons = {
		badgeCheck: {
			light: null,
			regular: null,
			solid: faBadgeCheck
		},
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
		warning: {
			light: null,
			regular: null,
			solid: faTriangleExclamation
		},
		xmark: {
			light: faXmarkLight,
			regular: faXmarkRegular,
			solid: null
		}
	};
</script>

<Fa icon={icons[name][style]} {...$$restProps} />
