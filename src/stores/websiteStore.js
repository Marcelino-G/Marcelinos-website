import { defineStore } from 'pinia';
import mainImage from "@/assets/m1.jpg"
import animatedImage from '@/assets/m2.jpg';


export const useWebsiteStore = defineStore('websiteStore', {

    state: () => {
        return {

            homePage: {
                headerImage: mainImage,
                main_content: {
                    softwareDeveloper: {
                        title: "I am a software developer",
                        img: "../"
                    },
                    adventurer: {
                        title: "I am an adventurer",
                        img: "...//"
                    },
                    magicHolder: {
                        title: "I am a magic holder",
                        img: "..../"
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
    }
})