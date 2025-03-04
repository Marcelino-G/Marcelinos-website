import { defineStore } from 'pinia';

export const useNavStore = defineStore('nav', {

    state: () => {
        return {
            id: 0,
            links: {
                1: "Home",
                2: "About me",
                3: "Projects",
                4: "Contact me"
            }

        }
    }






})