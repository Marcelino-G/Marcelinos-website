import { defineStore } from 'pinia';
import mainImage from '@/assets/m1.jpg';
import linkedInImage from '@/assets/linkedIn.jpg';
import githubImage from '@/assets/github.jpg';
import resumeImage from '@/assets/file-earmark-person.jpg';
import envelopeImage from '@/assets/envelope.jpg'


export const useAboutStore = defineStore('about', {

    state: () => {
        return {

            topicHeader: {
                headerTitle: "About me",
                headerImage: mainImage
            },
            supportingContentHeader: {
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
            },
            contentMain: {
                aboutMe: "one day in a land far faar waya"
            },
            supportingContentMain: {
                frontEnd: ["JavaScript", "CSS", "HTML"]
            }
        }
    }
})