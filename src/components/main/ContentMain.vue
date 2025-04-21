<script setup>
import { defineProps } from "vue";
import { motion, AnimatePresence } from "motion-v";

const props = defineProps({
  content: Object,
  isHome: Boolean,
  isAbout: Boolean,
  isProject: Boolean,
});

import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();
</script>

<template>
  <div>
    <div v-if="isHome === true" id="isHomeContainerMainContent">
      <motion.img
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :key="websiteStore.getCurrentHomeImage.currentHomeIndex"
        :src="websiteStore.getCurrentHomeImage.currentHomeImage"
        :alt="websiteStore.getCurrentHomeImage.currentHomeAltText"
      />
    </div>

    <div v-if="isAbout === true" id="isAboutContainerMainContent">
      <div>
        <p>{{ content.currentBiography[0] }}</p>
        <p>{{ content.currentBiography[1] }}</p>
        <p>{{ content.currentBiography[2] }}</p>
        <p>{{ content.currentBiography[3] }}</p>
        <p>{{ content.currentBiography[4] }}</p>
        <p>{{ content.currentBiography[5] }}</p>
      </div>
    </div>

    <div v-if="isProject === true" id="isProjectContainerMainContent">
      <motion.ul :key="content.currentProjectIndex">
        <li>
          {{ content.currentProjectDescription }}
        </li>

        <div class="projectDetailsContainer">
          <li>Completed: {{ content.currentProjectDate }}</li>
          <li>Built with: {{ content.currentBuiltWith }}</li>
          <li>
            <a :href="content.currentProjectGithub" target="_blank"
              >GitHub repository</a
            >
          </li>
          <li>
            <a
              v-if="content.currentProjectApplication !== ''"
              :href="content.currentProjectApplication"
              target="_blank"
              >Application</a
            >
            <p v-else>&nbsp;</p>
          </li>
        </div>
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
  </div>
</template>

<style scoped>
a {
  color: #f8f8ff;
}

#isHomeContainerMainContent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#isHomeContainerMainContent img {
  max-width: 90%;
  max-height: 90%;
  background: rgba(33, 33, 33, 0.6);
  border-radius: 5%;
  padding: 10px;
}

#isAboutContainerMainContent {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
padding: 0 20px;
  /* padding: 20px; */

}

#isAboutContainerMainContent div {
  width: 90%;
  height: 90%;
  padding: 20px;
  overflow: auto;
  scrollbar-color: #a9a9a9 rgba(0, 0, 0, 0.4);
  background: rgba(33, 33, 33, 0.6);
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* align-items: center; */
  gap: 15px;
  
}

#isAboutContainerMainContent p {
  /* text-align: center; */
}

#isProjectContainerMainContent {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  /* justify-content: center; */
  padding: 0 20px;
}

#isProjectContainerMainContent ul {
  grid-area: ul;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
  background: rgba(33, 33, 33, 0.6);
  border-radius: 5%;
  padding: 20px;
  text-align: center;
  overflow: auto;
  scrollbar-color: #a9a9a9 rgba(0, 0, 0, 0.4);
  gap: 20px;
}

.projectDetailsContainer li {
  margin: 5px 0;
}

#videoHitContainer {
  grid-area: video;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#videoHitContainer img {
  position: absolute;
  max-height: 15%;
  max-width: 10%;
}

#videoContainer video {
  background: rgba(33, 33, 33, 0.6);
  border-radius: 5%;
  max-width: 100%;
  max-height: 100%;
  padding: 10px;
}

@media only screen and (max-width: 768px) {
  #isProjectContainerMainContent {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-template-areas: "ul";
    /* padding: 10px; */
  }

  #videoHitContainer {
    display: none;
  }

  #isProjectContainerMainContent ul {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  #isProjectContainerMainContent {
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
    grid-template-areas: "ul video";
    /* padding: 25px; */
  }
  #isProjectContainerMainContent ul {
    width: 90%;
  }

  #videoHitContainer {
    display: flex;
  }
}

@media only screen and (min-width: 992px) {
  #isProjectContainerMainContent {
    grid-template-columns: 60% 40%;
  }
}
</style>
