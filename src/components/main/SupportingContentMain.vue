<script setup>
import { motion, AnimatePresence } from "motion-v";
import leftFinger from "@/assets/icons/arrow-left.png";
import rightFinger from "@/assets/icons/arrow-right.png";
import { defineProps } from "vue";
const props = defineProps({
  content: Object,
  isHome: Boolean,
  isAbout: Boolean,
  isProject: Boolean,
});
</script>

<template>
  <div>
    <div id="isHomeContainerSupportingContent" v-if="isHome === true">
      <motion.button
        @click="content.backwardHomeTitleAndImage"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="leftFinger" alt="Left arrow button." />
      </motion.button>

      <ul id="isHomeUlMediumInterface">
        <motion.li
          v-for="(detail, index) in content.homeImages.images"
          :key="index"
          :initial="{ opacity: 0.7, rotateX: 10, rotateY: 65, scale: 1 }"
          :whileHover="{
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            scale: 1.2,
          }"
          :transition="{ duration: 0.5 }"
          @click="content.setCurrentHomeTitleAndImage(index)"
        >
          <motion.img
            :whilePress="{ backgroundColor: ['rgba(255, 255, 255, 0.5)'] }"
            :src="detail"
            :alt="content.homeImages.alts[index]"
          />
        </motion.li>
      </ul>

      <ul id="isHomeUlSmallInterface">
        <AnimatePresence
          v-for="(detail, index) in content.homeImages.images"
          :key="index"
        >
          <motion.li
            :initial="{ opacity: 0.4, scale: 0.75 }"
            :key="index"
            v-if="index !== content.currentHomeIndex"
          >
          </motion.li>
          <motion.li
            :initial="{ opacity: 0.4, scale: 0.75 }"
            :animate="{ opacity: 1, scale: 1 }"
            :key="index"
            :exit="{ opacity: 0.4, scale: 0.75 }"
            :transition="{ duration: 1 }"
            v-if="index === content.currentHomeIndex"
          >
          </motion.li>
        </AnimatePresence>
      </ul>

      <motion.button
        @click="content.forwardHomeTitleAndImage"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="rightFinger" alt="Right arrow button." />
      </motion.button>
    </div>

    <div v-if="isAbout === true" id="isAboutContainerSupportingContent">
      <ul id="isAboutUl">
        <li id="stackListItem">
          <h3>Tech Stack</h3>
          <ul
            v-for="(skillCategory, index) in content.technicalSkills"
            :key="index"
          >
            <h4>{{ index }}:</h4>
            <li v-for="(skill, index) in skillCategory" :key="index">
              {{ skill }}
            </li>
          </ul>
        </li>
        <li id="faqListItem">
          <h3>FAQ</h3>
          <ul>
            <li
              v-for="(question, index) in content.questionsAndAnswers.questions"
              :key="index"
            >
              <p>{{ question }}</p>
              <p
                v-if="content.questionsAndAnswers.answers[index] !== 'spotify'"
              >
                {{ content.questionsAndAnswers.answers[index] }}
              </p>
              <iframe
                v-else
                style="border-radius: 12px"
                src="https://open.spotify.com/embed/playlist/7y8S1cGlXAeLRRmWk85Nud?utm_source=generator"
                height="100px"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div id="isProjectContainerSupportingContent" v-if="isProject === true">
      <ul>
        <li
          v-for="(title, index) in content.titles"
          :key="index"
          @click="content.setCurrentProject(index)"
        >
          <p>|| {{ title }} ||</p>

          <div class="projectTitleBackground">
            <div
              :class="{
                titleBackgroundOne: content.currentProjectIndex === index,
              }"
            ></div>
            <div
              :class="{
                titleBackgroundTwo: content.currentProjectIndex === index,
              }"
            ></div>
            <div
              :class="{
                titleBackgroundThree: content.currentProjectIndex === index,
              }"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

button {
  background: none;
  cursor: pointer;
  display: flex;
}

#supporting-content-main {
  /* border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue); */
}

#isHomeContainerSupportingContent {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
}

#isHomeUlMediumInterface {
  justify-content: center;
  height: 100%;
}

#isHomeUlMediumInterface li {
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#isHomeUlMediumInterface li img {
  max-width: 95%;
  max-height: 95%;
  background: rgba(33, 33, 33, 0.6);
  border-radius: 5%;
  padding: 10px;
}

#isAboutContainerSupportingContent {
  height: 100%;
  width: 100%;
}

#isAboutUl {
  height: 100%;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-areas: "stack faq";
  text-align: center;
}

#isAboutUl h3 {
  width: 100%;
}

#isAboutUl > li {
  overflow: auto;
  scrollbar-color: #a9a9a9 rgba(0, 0, 0, 0.4);
  padding: 10px 5%;
  gap: 10px;
  display: flex;
}

#isAboutUl > li:last-child {
  padding-bottom: 0;
}

#stackListItem {
  justify-content: space-evenly;
  flex-wrap: wrap;
}
#stackListItem ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#stackListItem ul li {
  border-radius: 5%;
  padding: 5px;
  background: rgba(244, 208, 63, 0.4);
}

#faqListItem {
  flex-direction: column;
}

#faqListItem ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#faqListItem ul p {
  margin: 0 auto;
}

#faqListItem ul li p:last-child {
  width: 75%;
  border-radius: 5%;
  padding: 5px;
  background: rgba(163, 177, 138, 0.4);
}

#isProjectContainerSupportingContent {
  height: 100%;
}

#isProjectContainerSupportingContent ul {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  text-align: center;
  overflow: auto;
  scrollbar-color: #a9a9a9 rgba(0, 0, 0, 0.4);
  padding: 25px 5%;
}

#isProjectContainerSupportingContent ul li {
  cursor: pointer;
  position: relative;
}

#isProjectContainerSupportingContent ul li p {
  position: relative;
  z-index: 2;
}

.projectTitleBackground {
  padding-top: 5px;
  min-height: 20px;
  width: 100%;
  position: absolute;
}

.projectTitleBackground div {
  width: 0;
  height: 0;
  position: absolute;
}

@keyframes poweringUpSides {
  0% {
    border-bottom: 15px solid rgba(128, 0, 128, 0.6);
  }
  33% {
    border-bottom: 15px solid rgba(128, 0, 128, 0.8);
  }
  66% {
    border-bottom: 15px solid rgba(128, 0, 128, 1);
  }
  100% {
    border-bottom: 15px solid rgba(128, 0, 128, 0.6);
  }
}

@keyframes poweringUpMiddle {
  0% {
    border-bottom: 20px solid rgba(128, 0, 128, 0.6);
  }
  33% {
    border-bottom: 20px solid rgba(128, 0, 128, 0.8);
  }
  66% {
    border-bottom: 20px solid rgba(128, 0, 128, 1);
  }
  100% {
    border-bottom: 20px solid rgba(128, 0, 128, 0.6);
  }
}

.titleBackgroundOne {
  animation: poweringUpSides 2.5s infinite ease-in-out;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  left: 0px;
}

.titleBackgroundTwo {
  left: 0;
  right: 0;
  margin: auto;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  animation: poweringUpMiddle 2.5s infinite ease-in-out;
  animation-delay: 0.33s;
}

.titleBackgroundThree {
  animation: poweringUpSides 2.5s infinite ease-in-out;
  animation-delay: 0.66s;
  right: 0px;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
}

@media only screen and (max-width: 992px) {
  #isHomeUlMediumInterface {
    display: none;
  }

  #isHomeUlSmallInterface {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  #isHomeUlSmallInterface li {
    width: 20px;
    height: 20px;
    background: rgba(245, 245, 240);
  }

  .projectTitleBackground {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  /* #isHomeUlMediumInterface li {
    margin: 0;
  } */

  iframe {
    width: 80px;
  }
}

@media only screen and (min-width: 768px) {
  #isHomeUlMediumInterface {
    display: flex;
  }

  #isHomeUlSmallInterface {
    display: none;
  }

  #isHomeUlMediumInterface li img {
    padding: 5px;
  }
}

@media only screen and (min-width: 992px) {
  .projectTitleBackground {
    display: block;
  }
}

@media only screen and (min-width: 1200px) {
  /* #isHomeUlMediumInterface li {
    margin: 0 -2%;
  } */

  iframe {
    width: 100%;
  }

  #isHomeUlMediumInterface li img {
    padding: 10px;
  }
}

@media only screen and (min-width: 1400px) {
  iframe {
    width: 85%;
  }
}
</style>
