import { defineStore } from 'pinia';
import mainImage from "@/assets/profileImgs/m1.jpg"
import animatedImage from '@/assets/profileImgs/m2.jpg';

import sonicImage from '@/assets/homeImgs/sonic.jpg';
import dodgersImage from '@/assets/homeImgs/dodgers.jpg';
import yosemiteImage from '@/assets/homeImgs/yosemite.jpg';
import disneyImage from '@/assets/homeImgs/disney.jpg';


export const useWebsiteStore = defineStore('websiteStore', {

    state: () => {
        return {

            currentTitle: null,
            homePage: {
                headerImage: mainImage,
                main_content: {
                    dodgerBlue: {
                        title: "I bleed dodger blue",
                        img: dodgersImage
                    },
                    adventurer: {
                        title: "I am an adventurer",
                        img: yosemiteImage
                    },
                    movieGoer: {
                        title: "I am a movie goer",
                        img: sonicImage
                    },
                    magicHolder: {
                        title: "I am a magic holder",
                        img: disneyImage
                    }
                }
            },

            aboutMePage: {
                main_content: {
                    title: "About me",
                    aboutMe: "lorem",
                    funFacts: {
                        technical: {
                            Languages: ["Java", "SQL", "JavaScript", "HTML/CSS"],
                            Frameworks: ["Spring Boot", "Vue.js"],
                            Tools: ["VS Code", "IntelliJ"]
                        },
                        questions: {
                            1:{
                                question: "What’s the greatest TV show of all time?",
                                answer: "Malcolm in the Middle"
                            },
                            2: {
                                question: "What's the most heartbreaking video game death?",
                                answer: "Aerith Gainsborough - Final Fantasy 7"
                            },
                            3:{
                                question: "Who's the greatest anime character of all time?",
                                answer: "Kazuma Kuwabara - YuYu Hakusho"
                            },
                            4: {
                                question: "What book terrified you?",
                                answer: "Rosemary's Baby"
                            },
                            5:{
                                question: "Who do you main in Overwatch?",
                                answer: "Reinhardt, at your service!"
                            },
                            6:{
                                question: "What’s the first album you ever bought?",
                                answer: "I Brought You My Bullets, You Brought Me Your Love - My Chemical Romance"
                            },
                            7:{
                                question: "What do you miss the most from older video games that modern ones just don't do anymore?",
                                answer: "The music video intros before the start menu."
                            }
                        }
                    }
                    
                    
                }
            },

            projectsPage: {
                headerImage: animatedImage,
                main_content: {
                    project1: {
                        title: "title1",
                        img: "../",
                        description: "this does that"
                    },
                    project2: {
                        title: "title2",
                        img: "../",
                        description: "this does this"
                    },
                    project3: {
                        title: "title3",
                        img: "../",
                        description: "this does what"
                    }
                },

                supporting_content_header: {
                    busterSword: {
                        icon: "../",
                        description: 'Buster Sword',
                        sound: "../",
                        hitImage: "..//"
                    },
                    leatherGloves: {
                        icon: ".../",
                        description: 'Leather Gloves',
                        sound: "../",
                        hitImage: "..//"
                    },
                    guardStick: {
                        icon: ".../",
                        description: 'Guard Stick',
                        sound: "../",
                        hitImage: "..//"
                    }

                }
            }
        }
    },
    actions: {
        setCurrentTitle(title){
            this.currentTitle = title;
        }
    }
})