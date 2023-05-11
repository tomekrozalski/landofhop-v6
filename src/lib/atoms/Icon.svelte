<script lang="ts">
	import Fa from 'svelte-fa';
	import {
		faBadgeCheck,
		faCaretRight,
		faLeaf,
		faLock,
		faLockOpen,
		faSpinner,
		faTriangleExclamation
	} from '@fortawesome/pro-solid-svg-icons';
	import {
		faEllipsis,
		faCheck,
		faXmark as faXmarkRegular
	} from '@fortawesome/pro-regular-svg-icons';
	import { faMagnifyingGlass, faXmark as faXmarkLight } from '@fortawesome/pro-light-svg-icons';

	export let name:
		| 'badgeCheck'
		| 'caretRight'
		| 'check'
		| 'ellipsis'
		| 'leaf'
		| 'login'
		| 'logout'
		| 'search'
		| 'spinner'
		| 'warning'
		| 'xmark';
	export let style: 'solid' | 'regular' | 'light' = 'regular';

	const icons = {
		badgeCheck: {
			light: null,
			regular: null,
			solid: faBadgeCheck
		},
		caretRight: {
			light: null,
			regular: null,
			solid: faCaretRight
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
		leaf: {
			light: null,
			regular: null,
			solid: faLeaf
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
		spinner: {
			light: null,
			regular: null,
			solid: faSpinner
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
