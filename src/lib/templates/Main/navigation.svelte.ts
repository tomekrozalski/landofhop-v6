function createNavigation() {
	let isNavigationOpened = $state(false);
	let isSearchbarActive = $state(false);
	let searchHistory = $state(0);

	return {
		closeNavbar: () => (isNavigationOpened = false),
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
		toggleNavbar: () => (isNavigationOpened = !isNavigationOpened)
	};
}

const navigation = createNavigation();

export default navigation;
