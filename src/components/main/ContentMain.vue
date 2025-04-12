<script setup>
import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();
// import { useRoute } from 'vue-router';
// import { watch, onMounted } from 'vue';
// import { useMainStore } from '@/stores/mainStore';

// const mainStore = useMainStore();
// const route = useRoute();

// onMounted(() => {
//   mainStore.setMainsupport(route.fullPath);
// })

// watch(route, (newRouter, oldRouter) => {
//   mainStore.setMainsupport(newRouter.fullPath)
// })

import { defineProps } from "vue";
// import VideoDescriptionMain from "@/components/main/VideoDescriptionMain.vue"

const props = defineProps({
  content: Object,
  isHome: Boolean,
  isAbout: Boolean,
  isProject: Boolean,
});

// import { useRoute } from "vue-router";
// const route = useRoute();
import { motion, AnimatePresence } from "motion-v";

let isProjectClicked = false;
const toggleHitImage = () => {
  isProjectClicked = true;
  isProjectClicked = false;
};
</script>

<template>
  <div>
    <div v-if="isHome === true">
      <AnimatePresence>
        <motion.img
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
          :key="content.currentHomeIndex"
          :src="content.currentHomeImage"
        />
      </AnimatePresence>
    </div>

    <div v-if="isAbout === true">
      <AnimatePresence>
        <motion.p
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
        >
          {{ content.currentBiography }}
        </motion.p>
      </AnimatePresence>
    </div>

    <div v-if="isProject === true" id="isProjectContainer">
      <motion.ul :key="content.currentProjectIndex">
        <li>
          {{ content.currentProjectDescription }}
        </li>
        <li>Completed: {{ content.currentProjectDate }}</li>
        <li>
          <a :href="content.currentProjectGithub" target="_blank"
            >GitHub repository</a
          >
        </li>
        <li v-if="content.currentProjectApplication !== ''">
          <a :href="content.currentProjectApplication" target="_blank"
            >Application</a
          >
        </li>
      </motion.ul>

      <div id="videoHitContainer">
        <div id="videoContainer">
          <AnimatePresence>
            <motion.video
              autoplay
              muted
              loop
              controls
              poster=""
              controlsList="nodownload noplaybackrate"
              :key="content.currentProjectIndex"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.5 }"
            >
              <source :src="content.currentProjectVideo" type="video/mp4" />
            </motion.video>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          <motion.img
            :src="content.currentProjectHitImage"
            :alt="content.currentProjectHitImage"
            :key="content.currentProjectIndex"
            :initial="{ opacity: 0 }"
            :exit="{ opacity: 1 }"
          />
        </AnimatePresence>
      </div>
    </div>

    <!-- <AnimatePresence>
        <motion.img
          :src="content.currentProjectHitImage"
          :alt="content.currentProjectHitImage"
          :key="content.currentProjectIndex"
          :initial="{ opacity: 1 }"
          :exit="{ opacity: 1 }"
        />
      </AnimatePresence> -->

    <!-- <motion.div

          
          
          id="videoContainer"
        >
          <video autoplay muted loop controls poster="" controlsList="nodownload noplaybackrate" >
            <source :src="content.currentProjectVideo" type="video/mp4" />
          </video>

          <AnimatePresence>
          <motion.img 
          :src="content.currentProjectHitImage" 
          :alt="content.currentProjectHitImage" 
          :key="content.currentProjectIndex"
          :initial="{ opacity: 0}"
          :exit="{ opacity: 1,}"
          />

          </AnimatePresence>
   
        </motion.div> -->
  </div>
  <!-- <AnimatePresence>
      <motion.div
        v-if="isHome === true"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 5 }"
        :key="content.currentIndex"
      >
        <img :src="content.currentTopicDetail" />
      </motion.div>
    </AnimatePresence> -->

  <!-- <div>
    <div v-if="content.aboutMe === undefined">
      <div v-for="(support, index) in content" :key="index">
        <img v-if="support.img !== undefined" :src="support.img" />
        <p v-if="support.description !== undefined">
          {{ support.description }}
        </p>
      </div>
    </div>

    <div v-else>
      <p>{{content.aboutMe}}</p>
    </div> -->

  <!-- <div v-if="route.fullPath === '/'">
        <img v-for="(support, index) in content" :src="support.img" :key="index" />
      </div>
      <div v-if="route.fullPath === '/about'">
        <p v-for="(aboutMe, index) in content" :key="index">{{ aboutMe }}</p>
      </div>
      <div v-if="route.fullPath === '/projects'">

        <div v-for="(support, index) in content" :key="index" >
          <img  :src="support.img"  />
          <p>{{ support.description }}</p>
          <video-description-main :videoDescription="support.description"  />
        </div>
        
      </div> -->
</template>

<style scoped>
img {
  /* max-width: 850px;
  max-height: 650px; */
  max-width: 95%;
  max-height: 95%;
}

video {
  max-width: 75%;
  max-height: 75%;
}

div {
  /* background-color: black; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 25px; */
}

#isProjectContainer {
  display: grid;

  grid-auto-columns: 55% 45%;
  grid-template-areas: "ul video";
  /* position: relative;
  display: flex;
  justify-content: flex-end; */
  /* align-items: center; */
}

#isProjectContainer > div {
  /* display: grid;
  grid-auto-columns: 50% 50%;
  grid-template-areas: "ul video"; */
}

#isProjectContainer > img {
  /* position: absolute;
  background: purple;
  max-height: 40%;
  max-width: 40%;
  right: 15%; */
  /* justify-self: flex-end; */
}

/* #contentContainer {
  background: red;
  width: 100%;
  display: grid;
  grid-auto-columns: 50% 50%;
  grid-template-areas: "ul video";
}

#contentContainer ul {
  grid-area: ul;
  background: green;
}

#contentContainer video {
  grid-area: video;
  margin: auto;

} */

#isProjectContainer ul {
  grid-area: ul;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 25px;
}

#videoHitContainer {
  grid-area: video;
  margin-bottom: 10%;
  /* background: blue; */
  /* position: relative; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* justify-content: center; */
}

#videoContainer  {
  /* margin: auto; */
  background: rgba(128, 128, 128, 0.8);
  border-radius: 5%;
  max-width: 90%;
  max-height: 80%;
}

#videoContainer video  {
  max-width: 90%;
  max-height: 90%;
}

#videoHitContainer img {
  position: absolute;
  max-height: 25%;
  max-width: 25%;
}
</style>
