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
                currentHomeTitle: "I bleed dodger blue",
                currentHomeImage: dodgersImage,
                currentHomeIndex: 0,
                main_content: {
                    0: {
                        title: "I bleed dodger blue",
                        image: dodgersImage
                    },
                    1: {
                        title: "I am an adventurer",
                        image: yosemiteImage
                    },
                    2: {
                        title: "I am a movie goer",
                        image: sonicImage
                    },
                    3: {
                        title: "I am a magic holder",
                        image: disneyImage
                    }
                }
            },

            aboutMePage: {
                main_content: {
                    currentAboutTitle: "About me",
                    currentBiography: "lorem",
                    funFacts: {
                        technical: {
                            Languages: ["Java", "SQL (PostgreSQL)", "JavaScript", "HTML/CSS"],
                            Frameworks: ["Spring Boot", "Vue.js", "Bootstrap"],
                            Tools: ["Git", "Visual Studio Code", "IntelliJ", "Postman", "pgAdmin"]
                        },
                        questionsAndAnswers: {
                            0: {
                                question: "What’s the greatest TV show of all time?",
                                answer: "Malcolm in the Middle"
                            },
                            1: {
                                question: "What's the greatest movie of all time (but not your favorite)?",
                                answer: "Rocky"
                            },
                            2: {
                                question: "What book terrified you?",
                                answer: "Rosemary's Baby"
                            },
                            3: {
                                question: "What’s the first album you ever bought?",
                                answer: "I Brought You My Bullets, You Brought Me Your Love - My Chemical Romance"
                            },
                            4: {
                                question: "What do you miss the most from older video games that modern ones just don't do anymore?",
                                answer: "The music video like intros before the start menu."
                            },
                            5: {
                                question: "What's the most heartbreaking video game death?",
                                answer: "Aerith Gainsborough - Final Fantasy 7"
                            },
                            6: {
                                question: "Who do you main in Overwatch?",
                                answer: "Reinhardt, at your service!"
                            },
                            7: {
                                question: "Who's the greatest anime character of all time?",
                                answer: "Kazuma Kuwabara - YuYu Hakusho"
                            }
                        }
                    }
                }
            },

            projectsPage: {
                headerImage: animatedImage,

                currentProjectTitle: "Roll for Pokemon",
                currentProjectVideo: rollPokemonVideo,
                currentProjectDate: "Jan 2025",
                currentProjectGithub: "https://github.com/Marcelino-G/Roll-for-Pokemon",
                currentProjectApplication: "",
                currentProjectDescription: "this does that",
                currentProjectIndex: 0,



                currentProjectSound: slashSound,
                currentProjectHitImage: swordHitImage,
                currentProjectWeaponIndex: 0,
                main_content: {
                    0: {
                        title: "Roll for Pokemon",
                        video: rollPokemonVideo,
                        dateCompleted: "Jan 2025",
                        github: "https://github.com/Marcelino-G/Roll-for-Pokemon",
                        application: "",
                        description: "this does that"
                    },
                    1: {
                        title: "3,000 Meters Above",
                        video: metersGameVideo,
                        dateCompleted: "Feb 2023",
                        github: "https://github.com/Marcelino-G/3-000-Meters-Above",
                        application: "https://marcelino-g.github.io/3-000-Meters-Above/",
                        description: "this does this"
                    },
                    2: {
                        title: "Replicat, Soft Revival",
                        video: replicatVideo,
                        dateCompleted: "Oct 2022",
                        github: "https://github.com/Marcelino-G/Replicat-Soft-Revival",
                        application: "https://marcelino-g.github.io/Replicat-Soft-Revival/",
                        description: "this does what"
                    },
                    3: {
                        title: "Movie Pals",
                        video: moviePalsVideo,
                        dateCompleted: "Aug 2022",
                        github: "https://github.com/Marcelino-G/Movie-Pals",
                        application: "",
                        description: "this does what"
                    },
                    4: {
                        title: "Who's that Monstermon?",
                        video: whosMonsterVideo,
                        dateCompleted: "May 2022",
                        github: "https://github.com/Marcelino-G/Who-s-that-Monstermon",
                        application: "https://marcelino-g.github.io/Who-s-that-Monstermon/",
                        description: "this does what"
                    },
                },

                supporting_content_header: {
                    0: {
                        weaponImage: swordImage,
                        description: 'Buster Sword',
                        sound: slashSound,
                        hitImage: swordHitImage
                    },
                    1: {
                        weaponImage: stickImage,
                        description: 'Guard Stick',
                        sound: magicSound,
                        hitImage: stickHitImage
                    },
                    2: {
                        weaponImage: glovesImage,
                        description: 'Leather Gloves',
                        sound: punchSound,
                        hitImage: gloveHitImage
                    }

                }
            }
        }
    },
    actions: {
        setCurrentHomeTitleAndImage(key) {
            this.homePage.currentHomeTitle = this.homePage.main_content[key].title;
            this.homePage.currentHomeImage = this.homePage.main_content[key].image;
            this.homePage.currentHomeIndex = key;
        },
        forwardHomeTitleAndImage() {
            if (this.homePage.currentHomeIndex === Object.keys(this.homePage.main_content).length - 1) {
                this.setCurrentHomeTitleAndImage(0);
            } else {
                this.homePage.currentHomeIndex = this.homePage.currentHomeIndex + 1;
                this.setCurrentHomeTitleAndImage(this.homePage.currentHomeIndex);
            }
        },
        backwardHomeTitleAndImage() {
            if (this.homePage.currentHomeIndex === 0) {
                this.setCurrentHomeTitleAndImage(Object.keys(this.homePage.main_content).length - 1);
            } else {
                this.homePage.currentHomeIndex = this.homePage.currentHomeIndex - 1;
                this.setCurrentHomeTitleAndImage(this.homePage.currentHomeIndex);
            }
        },
        setCurrentProjectHitImageAndSound(key) {
            this.projectsPage.currentProjectHitImage = this.projectsPage.supporting_content_header[key].hitImage;
            this.projectsPage.currentProjectSound = this.projectsPage.supporting_content_header[key].currentSound;
            this.projectsPage.currentProjectWeaponIndex = key
        },
        setCurrentProject(key) {
            this.projectsPage.currentProjectTitle = this.projectsPage.main_content[key].title;
            this.projectsPage.currentProjectVideo = this.projectsPage.main_content[key].video;
            this.projectsPage.currentProjectDate = this.projectsPage.main_content[key].dateCompleted;
            this.projectsPage.currentProjectGithub = this.projectsPage.main_content[key].github;
            this.projectsPage.currentProjectApplication = this.projectsPage.main_content[key].application;
            this.projectsPage.currentProjectDescription = this.projectsPage.main_content[key].description;
            this.projectsPage.currentProjectIndex = key

        }
    },
    getters: {
        getHomeImages(state) {
            let images = [];
            for (let key in state.homePage.main_content) {
                images.push(state.homePage.main_content[key].image);
            }
            return images;
        },
        getAboutTechnicalSkills() {
            let skills = this.aboutMePage.main_content.funFacts.technical;
            return skills;
        },
        getAboutQuestionsAndAnswers() {
            let questions = [];
            let answers = [];
            for (let key in this.aboutMePage.main_content.funFacts.questionsAndAnswers) {
                questions.push(this.aboutMePage.main_content.funFacts.questionsAndAnswers[key].question);
                answers.push(this.aboutMePage.main_content.funFacts.questionsAndAnswers[key].answer);
            }
            return { questions, answers };
        },
        getProjectWeaponImagesAndDescriptions() {
            let weaponImages = [];
            let descriptions = [];

            for (let key in this.projectsPage.supporting_content_header) {
                weaponImages.push(this.projectsPage.supporting_content_header[key].weaponImage);
                descriptions.push(this.projectsPage.supporting_content_header[key].description);
            }
            return { weaponImages, descriptions };
        },
        getProjectTitles() {
            let titles = [];

            for (let key in this.projectsPage.main_content) {
                titles.push(this.projectsPage.main_content[key].title);
            }

            return titles;
        }
    }
})