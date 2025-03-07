import { defineStore } from 'pinia';


export const useMainStore = defineStore('main', {

    state: () => {
        return {
            mainTopic: null,
            iAmTopics: {
                softwareDeveloper: {
                    description: "I am a software developer",
                    img: "../"
                },
                adventurer: {
                    description: "I am an adventurer",
                    img: "...//"
                },
                magicHolder: {
                    description: "I am a magic holder",
                    img: "..../"
                }
            }
                
            
        }
    },
    actions: {

        setMainTopic(fullPath){
            if(fullPath === '/'){
                this.mainTopic = this.iAmTopics;
            } else {
                this.mainTopic = null;
            }



        }



    }







})