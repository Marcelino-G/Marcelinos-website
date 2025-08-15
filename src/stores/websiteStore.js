import { defineStore } from 'pinia';

import mainImage from "@/assets/profile_images/m1.png"
import meAsCloud from '@/assets/profile_images/meAsCloud.png';
import meAsTifa from '@/assets/profile_images/meAsTifa.png';
import meAsAerith from '@/assets/profile_images/meAsAerith.png';

import devImage from '@/assets/home_images/dev.jpg';
import gradImage from '@/assets/home_images/grad.jpg';
import conservationImage from '@/assets/home_images/conservation.jpg';
import americorpsImage from '@/assets/home_images/americorps.jpg';
import yosemiteImage from '@/assets/home_images/yosemite.jpg';
import dodgersImage from '@/assets/home_images/dodgers.jpg';
import sonicImage from '@/assets/home_images/sonic.jpg';
import disneyImage from '@/assets/home_images/disney.jpg';
import batmanImage from '@/assets/home_images/batman.jpg';


import metersGameVideo from '@/assets/project_videos/metersGame.mp4';
import moviePalsVideo from '@/assets/project_videos/moviePals.mp4';
import replicatVideo from '@/assets/project_videos/replicat.mp4';
import rollPokemonVideo from '@/assets/project_videos/rollForPokemon.mp4';
import whosMonsterVideo from '@/assets/project_videos/whosThatMonster.mp4';
import spookyMoviesVideo from '@/assets/project_videos/topSpookyMovies.mp4';

import swordImage from '@/assets/game_images/busterSword.png';
import swordHitImage from '@/assets/game_images/swordHit.png';
import stickImage from '@/assets/game_images/guardStick.png';
import stickHitImage from '@/assets/game_images/stickHit.png';
import glovesImage from '@/assets/game_images/leatherGloves.png';
import gloveHitImage from '@/assets/game_images/gloveHit.png';

import magicSound from '@/assets/game_sounds/magicSound.mp3';
import punchSound from '@/assets/game_sounds/punchSound.mp3';
import slashSound from '@/assets/game_sounds/slashSound.mp3';

import spookyMoviesPdf from '@/assets/pdfs/top_spooky_movies.pdf';

export const useWebsiteStore = defineStore('websiteStore', {

    state: () => {
        return {

            // loadedImages: 0,

            isCredits: false,
            currentHeaderImage: mainImage,
            homePage: {
                isHomeSupportImagesLoading: true,
                isHomeMainImageLoading: true,
                headerImage: mainImage,
                currentHomeTitle: "I'm a software developer.",
                currentHomeImage: devImage,
                currentHomeIndex: 0,
                currentHomeAltText: "Me sitting at computer desk.",
                main_content: {
                    0: {
                        title: "I'm a software developer.",
                        image: devImage,
                        alt: "Me sitting at computer desk."
                    },
                    1: {
                        title: "I'm a CSUSB Coyote!",
                        image: gradImage,
                        alt: "Graduation collage picture."
                    },
                    2: {
                        title: "I'm always up for a conservation effort.",
                        image: conservationImage,
                        alt: "Group picture of conservation workers."
                    },
                    3: {
                        title: "I'm an AmeriCorps alum.",
                        image: americorpsImage,
                        alt: "Picture with AmeriCorps poster."
                    },
                    4: {
                        title: "I'm an adventurer!",
                        image: yosemiteImage,
                        alt: "Picture with waterfall in the background."
                    },
                    5: {
                        title: "It's time for Dodger baseball!",
                        image: dodgersImage,
                        alt: "Picture of me holding churros and Dodgers stadium in the background."
                    },
                    6: {
                        title: "I will rank among the best in your Halloween contest. (Sonic)",
                        image: sonicImage,
                        alt: "Picture of me dressed up as Sonic."
                    },
                    7: {
                        title: "I'm a Disney hater, but a Magic Key holder.",
                        image: disneyImage,
                        alt: "Picture of me on a Disney ride."
                    },
                    8: {
                        title: "I am the night.",
                        image: batmanImage,
                        alt: "Picture of me as Batman."
                    }
                }
            },

            aboutMePage: {
                main_content: {
                    currentAboutTitle: "About me",
                    currentBiography: [`Growing up in Southern California, I was surrounded by diverse cultures, awesome music, delicious foods, 
                    and the beautiful San Bernardino National Forest. This environment fostered my deep appreciation 
                    for the world around me and ultimately inspired me to dedicate myself to nurturing it in some way.`,
                        `Initially, I planned to do this by becoming a high school teacher. At one point, I was working as a student mentor
                    for at-risk youth and I got a glimpse into the education world. I found that it 
                    left a void in me, one it wouldn't be able to fill.`,
                        `Yes, I have an affinity for the world around me, but I 
                    also have a strong need for creative expression, which is something I don't want to limit to my free time. 
                    This realization led me to explore different technologies before fully gravitating toward software development. 
                    I chose software development because I had already touched upon it during my college years and really enjoyed it. I recognized
                    that it not only satisfied my creative tendencies, but that it can also benefit the world in a variety of ways.`,
                        `You might be wondering, "Is software development really a means of expression?" and I would say "Yes". 
                    Software development, from sketching and brainstorming your ideas on a diagram all the way to deploying it, gives 
                    me the same satisfaction and feeling writing a song on the guitar or drums did when I was younger. Building projects 
                    feels like an orchestration or a form of storytelling.`,
                        `So, because software development allows me to be creative and gives me the opportunity to better the world, I've naturally 
                    been immersed in it for over three years. My goal is to be part of meaningful projects that enhance quality of life and to become a mentor for future developers.`,
                        `Now that you've gotten to know me a bit, I invite you to explore 
                    my projects, connect with me on LinkedIn, and share your story.`],
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
                            },
                            8: {
                                question: "What music do you recommend?",
                                answer: "spotify"
                            }
                        }
                    }
                }
            },

            projectsPage: {

                isProjectPage: false,
                // headerImage: animatedImage,
                currentProjectTitle: "Roll for Pokemon",
                currentBuiltWith: "Java, SQL",
                currentProjectVideo: rollPokemonVideo,
                currentProjectDate: "Jan 2025",
                currentProjectGithub: "https://github.com/Marcelino-G/Roll-for-Pokemon",
                currentProjectApplication: "",
                currentProjectDescription:
                    `
                        Grab your bag and step into the tall grass, what Pokemon await and will you catch them all? The objective
                        of this project was to design it with polymorphism, inheritance, and encapsulation fundamentals in mind
                        to simplify complexity, promote readability, and encourage modifications. This project made me realize
                        that a detailed blueprint that outlines the features and connections between different components makes
                        the building process much smoother.
                        `,
                currentProjectIndex: 0,
                currentProjectSound: new Audio(slashSound),
                // isMuted: false,
                currentProjectHitImage: swordHitImage,
                isProjectWeaponImageLoading: true,
                currentProjectWeaponImage: swordImage,
                currentProjectWeaponDescription: 'Buster Sword',
                currentProjectWeaponIndex: 0,
                main_content: {
                    0: {
                        title: "Roll for Pokemon",
                        builtWith: "Java, SQL",
                        video: rollPokemonVideo,
                        dateCompleted: "Jan 2025",
                        github: "https://github.com/Marcelino-G/Roll-for-Pokemon",
                        application: "",
                        description:
                            `
                        Grab your bag and step into the tall grass, what Pokemon await and will you catch them all? The objective
                        of this project was to design it with polymorphism, inheritance, and encapsulation fundamentals in mind
                        to simplify complexity, promote readability, and encourage modifications. This project made me realize
                        that a detailed blueprint that outlines the features and connections between different components makes
                        the building process much smoother.
                        `
                    },
                    1: {
                        title: "Top Spooky Movies",
                        builtWith: "Microsoft Excel, SQL",
                        video: spookyMoviesVideo,
                        dateCompleted: "Oct 2023",
                        github: "",
                        application: spookyMoviesPdf,
                        description:
                            `
                        It's time to face your fears and uncover the creepiest crawlies in cinema that will send shivers down your spine.
                        The reason for this project was to perform an analysis with Microsoft Excel and to replicate the results with 
                        SQL to demonstrate data validity and compare the processes between the two technologies that reach the same goal.
                        This project made me recognize that similar technologies still have their own benefits and characteristics and understanding them
                        is wise, so that you can apply the proper tool to your project.
                        `
                    },
                    2: {
                        title: "3,000 Meters Above",
                        builtWith: "JavaScript, CSS",
                        video: metersGameVideo,
                        dateCompleted: "Feb 2023",
                        github: "https://github.com/Marcelino-G/3-000-Meters-Above",
                        application: "https://marcelino-g.github.io/3-000-Meters-Above/",
                        description:
                            `
                        Take control of a fighter pilot who faces waves of enemies as a strange voice tries to guide you home.
                        The purpose of this project was to familiarize myself with the methods associated with drawing onto the
                        <canvas> element and creating interactive animations. While this project may not be perfect, presentational and functional
                        goals were met, demonstrating animation and one of the many ways to express yourself through technology.
                        `
                    },
                    3: {
                        title: "Replicat, Soft Revival",
                        builtWith: "JavaScript, Bootstrap",
                        video: replicatVideo,
                        dateCompleted: "Oct 2022",
                        github: "https://github.com/Marcelino-G/Replicat-Soft-Revival",
                        application: "https://marcelino-g.github.io/Replicat-Soft-Revival/",
                        description:
                            `
                        Browse through The Siber Corporation's website and be persuaded by their "Replicat" product. The goal of this 
                        project was to create a responsive webpage capable of accommodating various device types and screen sizes with Bootstrap.
                        This project taught me that the message being conveyed to the user is what is most important and sometimes you have to
                        sacrifice or change features in order to translate it well for their specific devices.
                        `
                    },
                    4: {
                        title: "Movie Pals",
                        builtWith: "React, Bootstrap",
                        video: moviePalsVideo,
                        dateCompleted: "Aug 2022",
                        github: "https://github.com/Marcelino-G/Movie-Pals",
                        application: "",
                        description:
                            `
                        Create an account and build up your movie portfolio to share with friends in this imagined social media like platform. The 
                        focus of this project was to take advantage of React's reusable components and features to design clean code. The biggest 
                        takeaway from working on this project revolved around the importance of organization and clarity in development like 
                        properly naming/defining code elements, commenting on functions, and maintaining a consistent style throughout the project.
                        `
                    },
                    5: {
                        title: "Who's that Monstermon?",
                        builtWith: "JavaScript, CSS",
                        video: whosMonsterVideo,
                        dateCompleted: "May 2022",
                        github: "https://github.com/Marcelino-G/Who-s-that-Monstermon",
                        application: "https://marcelino-g.github.io/Who-s-that-Monstermon/",
                        description:
                            `
                        Watch your score count go up and reach a new personal record as you challenge your Pokemon knowledge. The emphasis of
                        this project was to fetch data from an API and display it to the user. This project helped me understand the concepts
                        related to "async" and "await" when working with external data and how unexpected behavior may occur without them.    
                        `
                    },
                },

                supporting_content: {
                    0: {
                        pixelImage: meAsCloud,
                        weaponImage: swordImage,
                        description: 'Buster Sword',
                        sound: slashSound,
                        hitImage: swordHitImage,
                        weaponImageLink: 'https://finalfantasy.fandom.com/wiki/Buster_Sword_(Final_Fantasy_VII)',
                        hitImageLink: 'https://pixabay.com/vectors/cross-delete-remove-cancel-abort-296507/',
                        soundLink: 'https://pixabay.com/sound-effects/sword-slash-05-266312/'

                    },
                    1: {
                        pixelImage: meAsAerith,
                        weaponImage: stickImage,
                        description: 'Guard Stick',
                        sound: magicSound,
                        hitImage: stickHitImage,
                        weaponImageLink: 'https://finalfantasy.fandom.com/wiki/Guard_Stick_(Final_Fantasy_VII)',
                        hitImageLink: 'https://pixabay.com/illustrations/star-swirl-twirl-light-geometric-7095346/',
                        soundLink: 'https://pixabay.com/sound-effects/magic-244951/'
                    },
                    2: {
                        pixelImage: meAsTifa,
                        weaponImage: glovesImage,
                        description: 'Leather Gloves',
                        sound: punchSound,
                        hitImage: gloveHitImage,
                        weaponImageLink: 'https://finalfantasy.fandom.com/wiki/Leather_Gloves_(VII_Remake)',
                        hitImageLink: 'https://pixabay.com/vectors/celebration-fireworks-night-party-152951/',
                        soundLink: 'https://pixabay.com/sound-effects/punch-2-37333/'
                    }

                }
            }
        }
    },
    actions: {
        setCurrentHeaderImage(isProjectsPage) {

            if (isProjectsPage) {
                this.currentHeaderImage = this.projectsPage.supporting_content[this.projectsPage.currentProjectWeaponIndex].pixelImage;
            } else {
                this.currentHeaderImage = this.homePage.headerImage;
            }
        },
        setProjectPage(bool) {
            this.projectsPage.isProjectPage = bool;
        },
        setCurrentHomeTitleAndImage(key, isPictureClick) {

            if (key === this.homePage.currentHomeIndex && isPictureClick) {
                return;
            }

            this.homePage.currentHomeTitle = this.homePage.main_content[key].title;
            this.homePage.currentHomeImage = this.homePage.main_content[key].image;
            this.homePage.currentHomeAltText = this.homePage.main_content[key].alt;
            this.homePage.currentHomeIndex = key;
            this.homePage.isHomeMainImageLoading = true;
        },
        forwardHomeTitleAndImage() {
            if (this.homePage.currentHomeIndex === Object.keys(this.homePage.main_content).length - 1) {
                this.setCurrentHomeTitleAndImage(0, false);
            } else {
                this.homePage.currentHomeIndex = this.homePage.currentHomeIndex + 1;
                this.setCurrentHomeTitleAndImage(this.homePage.currentHomeIndex, false);
            }
        },
        backwardHomeTitleAndImage() {
            if (this.homePage.currentHomeIndex === 0) {
                this.setCurrentHomeTitleAndImage(Object.keys(this.homePage.main_content).length - 1, false);
            } else {
                this.homePage.currentHomeIndex = this.homePage.currentHomeIndex - 1;
                this.setCurrentHomeTitleAndImage(this.homePage.currentHomeIndex, false);
            }
        },
        setCurrentProject(key) {
            if (key !== this.projectsPage.currentProjectIndex) {

                this.projectsPage.currentProjectTitle = this.projectsPage.main_content[key].title;
                this.projectsPage.currentBuiltWith = this.projectsPage.main_content[key].builtWith;
                this.projectsPage.currentProjectVideo = this.projectsPage.main_content[key].video;
                this.projectsPage.currentProjectDate = this.projectsPage.main_content[key].dateCompleted;
                this.projectsPage.currentProjectGithub = this.projectsPage.main_content[key].github;
                this.projectsPage.currentProjectApplication = this.projectsPage.main_content[key].application;
                this.projectsPage.currentProjectDescription = this.projectsPage.main_content[key].description;
                this.projectsPage.currentProjectIndex = key;


                this.projectsPage.currentProjectSound.currentTime = 0;
                this.projectsPage.currentProjectSound.play();
            }
        },
        // this is setting everything related to the weapon not just hit and sound
        setCurrentProjectHitImageAndSound(key) {
            this.projectsPage.currentProjectWeaponImage = this.projectsPage.supporting_content[key].weaponImage;
            this.projectsPage.currentProjectWeaponDescription = this.projectsPage.supporting_content[key].description;
            this.projectsPage.currentProjectHitImage = this.projectsPage.supporting_content[key].hitImage;
            this.projectsPage.currentProjectSound = new Audio(this.projectsPage.supporting_content[key].sound);
            this.currentHeaderImage = this.projectsPage.supporting_content[this.projectsPage.currentProjectWeaponIndex].pixelImage;

            this.projectsPage.isProjectWeaponImageLoading = true;
        },
        forwardProjectWeapon() {
            if (this.projectsPage.currentProjectWeaponIndex === Object.keys(this.projectsPage.supporting_content).length - 1) {
                this.projectsPage.currentProjectWeaponIndex = 0
            } else {
                this.projectsPage.currentProjectWeaponIndex = this.projectsPage.currentProjectWeaponIndex + 1;
            }
            this.setCurrentProjectHitImageAndSound(this.projectsPage.currentProjectWeaponIndex)
        },
        backwardProjectWeapon() {
            if (this.projectsPage.currentProjectWeaponIndex === 0) {
                this.projectsPage.currentProjectWeaponIndex = Object.keys(this.projectsPage.supporting_content).length - 1;
            } else {
                this.projectsPage.currentProjectWeaponIndex = this.projectsPage.currentProjectWeaponIndex - 1;
            }
            this.setCurrentProjectHitImageAndSound(this.projectsPage.currentProjectWeaponIndex)
        },
        setCredits() {
            this.isCredits = !this.isCredits;
        },
        setHomeSupportImagesLoading() {

            if (!this.loadedImages) {
                this.loadedImages = 0;
            }
            this.loadedImages++;
            if (this.getHomeImages.images.length === this.loadedImages) {
                this.homePage.isHomeSupportImagesLoading = false;
            }

        },
        setHomeMainImageLoading() {

            if (!this.loadedImage) {
                this.loadedImage = 0;
            }

            this.loadedImage = 0;
            this.loadedImage++;
            if (1 === this.loadedImage) {
                this.homePage.isHomeMainImageLoading = false;
            }
        },
        setProjectWeaponImageLoading() {

            if (!this.loadedWeaponImage) {
                this.loadedWeaponImage = 0;
            }
            this.loadedWeaponImage = 0;
            this.loadedWeaponImage++;
            if (1 === this.loadedWeaponImage) {
                this.projectsPage.isProjectWeaponImageLoading = false;
            }

        }
        // setMute(){
        //     this.projectsPage.isMuted = !this.projectsPage.isMuted;
        // }
    },
    getters: {
        getCurrentHeaderImage(state) {
            return state.currentHeaderImage;
        },
        getCurrentHomeImage(state) {
            let currentHomeImage = state.homePage.currentHomeImage;
            let currentHomeIndex = state.homePage.currentHomeIndex;
            let currentHomeAltText = state.homePage.currentHomeAltText;

            return { currentHomeImage, currentHomeIndex, currentHomeAltText }
        },
        getProjectPage(state) {
            return state.projectsPage.isProjectPage;
        },
        getHomeImages(state) {
            let images = [];
            let alts = [];

            for (let key in state.homePage.main_content) {
                images.push(state.homePage.main_content[key].image);
                alts.push(state.homePage.main_content[key].alt)
            }

            return { images, alts };
        },
        getAboutTechnicalSkills(state) {
            let skills = state.aboutMePage.main_content.funFacts.technical;
            return skills;
        },
        getAboutQuestionsAndAnswers(state) {
            let questions = [];
            let answers = [];
            for (let key in state.aboutMePage.main_content.funFacts.questionsAndAnswers) {
                questions.push(state.aboutMePage.main_content.funFacts.questionsAndAnswers[key].question);
                answers.push(state.aboutMePage.main_content.funFacts.questionsAndAnswers[key].answer);
            }
            return { questions, answers };
        },
        getCurrentProjectIndex(state) {
            return state.projectsPage.currentProjectIndex;
        },
        getCurrentProjectWeaponIndex(state) {
            return state.projectsPage.currentProjectWeaponIndex;
        },
        getProjectWeaponImagesAndDescriptions(state) {
            let weaponImages = [];
            let descriptions = [];

            for (let key in state.projectsPage.supporting_content) {
                weaponImages.push(state.projectsPage.supporting_content[key].weaponImage);
                descriptions.push(state.projectsPage.supporting_content[key].description);
            }
            return { weaponImages, descriptions };
        },
        getCurrentProjectWeaponImageAndDescription(state) {

            let weaponImage = state.projectsPage.currentProjectWeaponImage;
            let weaponDescription = state.projectsPage.currentProjectWeaponDescription;
            return { weaponImage, weaponDescription }
        },
        getProjectTitles(state) {
            let titles = [];

            for (let key in state.projectsPage.main_content) {
                titles.push(state.projectsPage.main_content[key].title);
            }

            return titles;
        },
        getHitImages(state) {
            let hitImages = [];

            for (let key in state.projectsPage.supporting_content) {
                hitImages.push(state.projectsPage.supporting_content[key].hitImage);
            }

            return hitImages;
        },
        getWeaponImageLinks(state) {
            let links = [];

            for (let key in state.projectsPage.supporting_content) {
                links.push(state.projectsPage.supporting_content[key].weaponImageLink);
            }

            return links;

        },
        getHitImageLinks(state) {
            let hitImageLinks = [];

            for (let key in state.projectsPage.supporting_content) {
                hitImageLinks.push(state.projectsPage.supporting_content[key].hitImageLink);
            }

            return hitImageLinks;

        },
        getSoundLinks(state) {
            let soundLinks = [];

            for (let key in state.projectsPage.supporting_content) {
                soundLinks.push(state.projectsPage.supporting_content[key].soundLink);
            }

            return soundLinks;

        }
    }
})