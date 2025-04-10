import { defineStore } from 'pinia';

import mainImage from "@/assets/profile_images/m1.jpg"
import animatedImage from '@/assets/profile_images/m2.jpg';

import sonicImage from '@/assets/home_images/sonic.jpg';
import dodgersImage from '@/assets/home_images/dodgers.jpg';
import yosemiteImage from '@/assets/home_images/yosemite.jpg';
import disneyImage from '@/assets/home_images/disney.jpg';

import metersGameVideo from '@/assets/project_videos/metersGame.mp4';
import moviePalsVideo from '@/assets/project_videos/moviePals.mp4';
import replicatVideo from '@/assets/project_videos/replicat.mp4';
import rollPokemonVideo from '@/assets/project_videos/rollForPokemon.mp4';
import whosMonsterVideo from '@/assets/project_videos/whosThatMonster.mp4';

import swordImage from '@/assets/game_images/busterSword.png';
import swordHitImage from '@/assets/game_images/swordHit.png';
import stickImage from '@/assets/game_images/guardStick.png';
import stickHitImage from '@/assets/game_images/stickHit.png';
import glovesImage from '@/assets/game_images/leatherGloves.png';
import gloveHitImage from '@/assets/game_images/gloveHit.png';

import magicSound from '@/assets/game_sounds/magicSound.mp3';
import punchSound from '@/assets/game_sounds/punchSound.mp3';
import slashSound from '@/assets/game_sounds/slashSound.mp3';


export const useWebsiteStore = defineStore('websiteStore', {

    state: () => {
        return {

            homePage: {
                headerImage: mainImage,
                main_content: {
                    dodgerBlue: {
                        title: "I bleed dodger blue",
                        image: dodgersImage
                    },
                    adventurer: {
                        title: "I am an adventurer",
                        image: yosemiteImage
                    },
                    movieGoer: {
                        title: "I am a movie goer",
                        image: sonicImage
                    },
                    magicHolder: {
                        title: "I am a magic holder",
                        image: disneyImage
                    }
                }
            },

            aboutMePage: {
                main_content: {
                    title: "About me",
                    aboutMe: "lorem",
                    funFacts: {
                        technical: {
                            Languages: ["Java", "SQL (PostgreSQL)", "JavaScript", "HTML/CSS"],
                            Frameworks: ["Spring Boot", "Vue.js", "Bootstrap"],
                            Tools: ["Git", "Visual Studio Code", "IntelliJ", "Postman", "pgAdmin"]
                        },
                        questions: {
                            1: {
                                question: "What’s the greatest TV show of all time?",
                                answer: "Malcolm in the Middle"
                            },
                            2: {
                                question: "What's the greatest movie of all time (but not your favorite)?",
                                answer: "Rocky"
                            },
                            3: {
                                question: "What book terrified you?",
                                answer: "Rosemary's Baby"
                            },
                            4: {
                                question: "What’s the first album you ever bought?",
                                answer: "I Brought You My Bullets, You Brought Me Your Love - My Chemical Romance"
                            },
                            5: {
                                question: "What do you miss the most from older video games that modern ones just don't do anymore?",
                                answer: "The music video like intros before the start menu."
                            },
                            6: {
                                question: "What's the most heartbreaking video game death?",
                                answer: "Aerith Gainsborough - Final Fantasy 7"
                            },
                            7: {
                                question: "Who do you main in Overwatch?",
                                answer: "Reinhardt, at your service!"
                            },
                            8: {
                                question: "Who's the greatest anime character of all time?",
                                answer: "Kazuma Kuwabara - YuYu Hakusho"
                            }
                        }
                    }


                }
            },

            projectsPage: {
                headerImage: animatedImage,
                main_content: {
                    1: {
                        title: "Roll for Pokemon",
                        video: rollPokemonVideo,
                        dateCompleted: "Jan 2025",
                        github: "https://github.com/Marcelino-G/Roll-for-Pokemon",
                        application: "",
                        description: "this does that"
                    },
                    2: {
                        title: "3,000 Meters Above",
                        video: metersGameVideo,
                        dateCompleted: "Feb 2023",
                        github: "https://github.com/Marcelino-G/3-000-Meters-Above",
                        application: "https://marcelino-g.github.io/3-000-Meters-Above/",
                        description: "this does this"
                    },
                    3: {
                        title: "Replicat, Soft Revival",
                        video: replicatVideo,
                        dateCompleted: "Oct 2022",
                        github: "https://github.com/Marcelino-G/Replicat-Soft-Revival",
                        application: "https://marcelino-g.github.io/Replicat-Soft-Revival/",
                        description: "this does what"
                    },
                    4: {
                        title: "Movie Pals",
                        video: moviePalsVideo,
                        dateCompleted: "Aug 2022",
                        github: "https://github.com/Marcelino-G/Movie-Pals",
                        application: "",
                        description: "this does what"
                    },
                    5: {
                        title: "Who's that Monstermon?",
                        video: whosMonsterVideo,
                        dateCompleted: "May 2022",
                        github: "https://github.com/Marcelino-G/Who-s-that-Monstermon",
                        application: "https://marcelino-g.github.io/Who-s-that-Monstermon/",
                        description: "this does what"
                    },
                },

                supporting_content_header: {
                    busterSword: {
                        image: swordImage,
                        description: 'Buster Sword',
                        sound: slashSound,
                        hitImage: swordHitImage
                    },
                    guardStick: {
                        image: stickImage,
                        description: 'Guard Stick',
                        sound: magicSound,
                        hitImage: stickHitImage
                    },
                    leatherGloves: {
                        image: glovesImage,
                        description: 'Leather Gloves',
                        sound: punchSound,
                        hitImage: gloveHitImage
                    }
                    
                }
            }
        }
    },
    actions: {
        setCurrentTitle(title) {
            this.currentTitle = title;
        }
    }
})