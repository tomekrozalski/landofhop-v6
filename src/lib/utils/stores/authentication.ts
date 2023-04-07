import { writable } from 'svelte/store';

type StatusType = 'idle' | 'pending' | 'fulfilled' | 'rejected';

const { subscribe, update, set } = writable<{
	isLoggedIn: boolean;
	loginStatus: StatusType;
}>({
	isLoggedIn: false,
	loginStatus: 'idle'
});

function logOut() {
	update((store) => {
		store.isLoggedIn = false;
		store.loginStatus = 'idle';

		return store;
	});
}

function setLoginStatus(status: StatusType) {
	update((store) => {
		store.isLoggedIn = status === 'fulfilled';
		store.loginStatus = status;

		return store;
	});
}

export default {
	logOut,
	set,
	setLoginStatus,
	subscribe
};
