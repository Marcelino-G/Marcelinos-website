import { defineStore } from 'pinia';
import mainImage from '@/assets/m1.jpg';
import linkedInImage from '@/assets/linkedIn.jpg';
import githubImage from '@/assets/github.jpg';
import resumeImage from '@/assets/file-earmark-person.jpg';
import envelopeImage from '@/assets/envelope.jpg'


export const useHomeStore = defineStore('home', {

    state: () => {
        return {

            topicHeader: {
                headerTitle: "Marcelino's home",
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
            topic_content_supporting_Main: {
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
    }
})