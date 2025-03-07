import { defineStore } from 'pinia';
import mainImage from '@/assets/m1.jpg';
import animatedImage from '@/assets/m2.jpg';
import linkedInImage from '@/assets/linkedIn.jpg';
import githubImage from '@/assets/github.jpg';
import resumeImage from '@/assets/file-earmark-person.jpg';
import envelopeImage from '@/assets/envelope.jpg'

export const useHeaderStore = defineStore('header', {

    state: () => {
        return {
            headerTitles: {
                headerTitle: null,
                homeViewTitle: "Marcelino's home",
                aboutViewTitle: "about me",
                projectsViewTitle: "my projects"
            },
            profileImages: {
                displayedImg: null,
                main: mainImage,
                animated: animatedImage
            },
            additionalContent: {
                supportingContent: null,
                home: {
                    linkedIn: {
                        icon: linkedInImage,
                        link: '../',
                        description: 'LinkedIn'
                    },
                    github: {
                        icon: githubImage,
                        link: '../',
                        description: 'GitHub'
                    },
                    resume: {
                        icon: resumeImage,
                        link: '../',
                        description: 'Resume'
                    },
                    mail: {
                        icon: envelopeImage,
                        link: '.../',
                        description: 'Email'
                    }
                }
            }
        }
    },
    actions: {
        setHeaderTitle(fullPath) {
            let path = fullPath;
            if (path === '/') {
                this.headerTitles.headerTitle = this.headerTitles.homeViewTitle;
            } else if (path === '/about') {
                this.headerTitles.headerTitle = this.headerTitles.aboutViewTitle;
            } else if (path === '/projects') {
                this.headerTitles.headerTitle = this.headerTitles.projectsViewTitle;
            } else {
                this.headerTitles.headerTitle = 'none';
            }
        },
        setDisplayedImg(fullPath) {
            let path = fullPath;
            if (path === '/' || path === '/about') {
                this.profileImages.displayedImg = this.profileImages.main;
            } else if (path === '/projects') {
                this.profileImages.displayedImg = this.profileImages.animated;
            }

        },
        setSupportingContent(fullPath){
            let path = fullPath;
            if (path === '/' || path === '/about') {
                this.additionalContent.supportingContent = this.additionalContent.home;
            } else if (path === '/projects') {
                this.additionalContent.supportingContent = "";
            }
        }
    }
})