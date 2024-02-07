import { writable } from 'svelte/store';

const { subscribe, update, set } = writable<{
	isNavigationOpened: boolean;
	isSearchbarActive: boolean;
	searchHistory: number;
}>({
	isNavigationOpened: false,
	isSearchbarActive: false,
	searchHistory: 0
});

function closeNavbar() {
	update((store) => {
		store.isNavigationOpened = false;

		return store;
	});
}

function toggleNavbar() {
	update((store) => {
		store.isNavigationOpened = !store.isNavigationOpened;

		return store;
	});
}

function openSearchBar() {
	update((store) => {
		store.isSearchbarActive = true;
		store.isNavigationOpened = false;

		return store;
	});
}

function moveSearchHistory() {
	update((store) => {
		store.searchHistory--;
		return store;
	});
}

function closeSearchBar() {
	update((store) => {
		history.go(store.searchHistory);
		store.isSearchbarActive = false;
		store.searchHistory = 0;
		return store;
	});
}

export default {
	closeNavbar,
	closeSearchBar,
	moveSearchHistory,
	openSearchBar,
	set,
	subscribe,
	toggleNavbar
};
