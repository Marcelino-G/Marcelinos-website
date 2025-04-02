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
                    magicHolder: {
                        title: "I am a magic holder",
                        img: disneyImage
                    },
                    movieGoer: {
                        title: "I am a movie goer",
                        img: sonicImage
                    }
                }
            },

            aboutMePage: {
                main_content: {
                    title: "About me",
                    aboutMe: "one day in a land far faar waya",
                    funFacts: {
                        technical: ["JavaScript", "CSS", "HTML"],
                        games: ["ff13", "healer main", "thess"]
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