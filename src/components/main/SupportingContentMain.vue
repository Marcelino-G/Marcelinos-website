<script setup>
import { defineProps } from "vue";
const props = defineProps({
  content: Object,
  isHome: Boolean,
  isAbout: Boolean,
  isProject: Boolean
});

// import { useRoute } from "vue-router";
// const route = useRoute();
import { motion, AnimatePresence } from "motion-v";
import leftFinger from "@/assets/icons/arrow-left.png";
import rightFinger from "@/assets/icons/arrow-right.png";
import handPointerImage from "@/assets/icons/hand-pointer.png";
</script>

<template>
  <div>
    <div id="isHomeContainer" v-if="isHome === true">
      <motion.button
        @click="content.backwardHomeTitleAndImage"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="leftFinger" />
      </motion.button>

      <ul id="isHomeUl">
        <AnimatePresence
          v-for="(detail, index) in content.homeImages"
          :key="index"
        >
          <motion.li
            :initial="{ opacity: 0.75, rotateX: 10, rotateY: 65, zIndex: 0 }"
            :whileHover="{
              opacity: 1,
              rotateX: 0,
              rotateY: 0,
              scale: 1.2,
              zIndex: 1,
            }"
            :transition="{ duration: 1 }"
            :key="index"
            @click="content.setCurrentHomeTitleAndImage(index)"
          >
            <img :src="detail" />
          </motion.li>
        </AnimatePresence>
      </ul>

      <motion.button @click="content.forwardHomeTitleAndImage" :whilePress="{ scale: 0.9 }">
        <img :src="rightFinger" />
      </motion.button>
    </div>



    <div v-if="isAbout === true" id="isAboutContainer">
      <ul id="isAboutUl">
        <li id="stack">
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
        <li id="faq">
          <h3>FAQ</h3>
          <ul>
            <li
              v-for="(question, index) in content.questionsAndAnswers.questions"
              :key="index"
            >
              <p>{{ question }}</p>
              <p>{{ content.questionsAndAnswers.answers[index] }}</p>
            </li>
          </ul>
        </li>
        <li id="spotify">
          <h3>Spotify Playlist</h3>
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/7y8S1cGlXAeLRRmWk85Nud?utm_source=generator"
            width="100%"
            height="100px"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </li>
      </ul>
    </div>






    <div id="isProjectContainer" v-if="isProject === true">
      <ul>
        <li v-for="(title, index) in content.titles" :key="index" @click="content.setCurrentProject(index)">
          <p>{{title}}</p>
          <!-- <img :class="{isHidden: index !== content.currentProjectIndex}"  :src="handPointerImage"/> -->
        </li>
        
      </ul>

    </div>

  </div>
</template>

<style scoped>
#supporting-content-main {
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  /* width: 97%;
  margin: 0 auto; */
}

#isHomeContainer {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
}

ul{
  list-style: none;
}

#isHomeUl {
  display: flex;
  justify-content: center;
  /* list-style: none; */
  height: 100%;
}

#isHomeUl li {
  max-height: 100%;
  margin: 0 -2.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#isHomeUl li img {
  max-width: 90%;
  max-height: 90%;
}

button {
  background: none;
  cursor: pointer;
}

#isAboutContainer {
  /* background: red; */
  height: 100%;
  width: 100%;
}

#isAboutUl {
  height: 100%;
  width: 100%;
  /* display: flex; */
  /* background: blue; */
  /* justify-content: space-evenly; */
  list-style: none;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-areas: "stack faq spotify";
  text-align: center;
}

#isAboutUl h3 {
  width: 100%;
  /* margin-bottom: 10px; */
}

#isAboutUl > li {
  overflow: auto;
  scrollbar-color: #a9a9a9 rgba(0, 0, 0, 0.4);
  
  /* scrollbar-width: thin; */
  /* width: 100%; */
  /* overflow: auto; */
  /* overflow-y: auto; */
  /* scrollbar-width: auto;
  scrollbar-color: #A9A9A9 rgba(0,0,0,0.4); */
  padding: 10px 5%;
  gap: 10px;
  display: flex;
  
}

#isAboutUl > li:last-child {
  padding-bottom: 0;
}

#stack {
  /* display: flex; */
  justify-content: space-evenly;
  /* text-align: center; */
  flex-wrap: wrap;
  /* gap: 10px; */
  
}
#stack ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* justify-content: center; */
  /* background: rgba(244, 208, 63, 0.5); */
  /* background: rgba(163, 177, 138, 0.5); */
}

#stack ul li {
  border-radius: 5%;
  padding: 5px;
  background: rgba(244, 208, 63, 0.4);
}

#faq{
  flex-direction: column;
}

#faq ul{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#faq ul p{
 margin: 0 auto;
}

#faq ul li p:last-child{
  width: 75%;
  border-radius: 5%;
  padding: 5px;
  background: rgba(163, 177, 138, 0.4);
}

#spotify{
  flex-direction: column;
}

#isProjectContainer{
  /* background: red; */
  height: 100%;
  padding: 10px 5%;
  
}

#isProjectContainer ul{
  /* background: green; */
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
}

#isProjectContainer ul li p{
  border-radius: 5%;
  padding: 5px;
  background: rgba(240, 160, 130, 0.4);
  cursor: pointer;
  margin-bottom: 5%;
}

.isHidden{
  visibility: hidden;
}

</style>
