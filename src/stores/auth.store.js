import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/api`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        credential: JSON.parse(localStorage.getItem('credential')),
        returnUrl: null
    }),
    actions: {
        async login(username, password) {
            const credential = await fetchWrapper.post(`${baseUrl}/login`, { username, password });
            debugger;
            // update pinia state
            this.credential = credential;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('credential', JSON.stringify(credential));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('credential');
            router.push('/login');
        }
    }
});
