import { Status } from '$lib/db/enums/Globals.enum';

function createNavigation() {
	let isNavigationOpened = $state(false);
	let isSearchbarActive = $state(false);
	let searchHistory = $state(0);
	let searchStatus = $state<Status>(Status.idle);

	return {
		closeNavbar: () => {
			isNavigationOpened = false;
			isSearchbarActive = false;
			searchHistory = 0;
		},
		closeSearchBar: () => {
			history.go(searchHistory);
			isSearchbarActive = false;
			searchHistory = 0;
		},
		get isNavigationOpened() {
			return isNavigationOpened;
		},
		get isSearchbarActive() {
			return isSearchbarActive;
		},
		moveSearchHistory: () => searchHistory--,
		openSearchBar: () => {
			isSearchbarActive = true;
			isNavigationOpened = false;
		},
		get searchStatus() {
			return searchStatus;
		},
		toggleNavbar: () => (isNavigationOpened = !isNavigationOpened),
		updateSearchStatus: (value: Status) => (searchStatus = value)
	};
}

const navigation = createNavigation();

export default navigation;
