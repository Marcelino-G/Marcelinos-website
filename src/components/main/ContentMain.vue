<script setup>
import { defineProps } from "vue";
import { motion, AnimatePresence } from "motion-v";

const props = defineProps({
  content: Object,
  isHome: Boolean,
  isAbout: Boolean,
  isProject: Boolean,
});
</script>

<template>
  <div>
    <div v-if="isHome === true" id="isHomeContainerMainContent">
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

    <div v-if="isAbout === true" id="isAboutContainerMainContent">
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

    <div v-if="isProject === true" id="isProjectContainerMainContent">
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
  </div>
</template>

<style scoped>
#isHomeContainerMainContent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#isHomeContainerMainContent img {
  max-width: 95%;
  max-height: 95%;
}

#isAboutContainerMainContent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#isProjectContainerMainContent {
  width: 100%;
  height: 100%;
  display: grid;
}

#isProjectContainerMainContent ul {
  grid-area: ul;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
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
  background: rgba(128, 128, 128, 0.8);
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
    padding: 10px;
  }

  #videoHitContainer {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  #isProjectContainerMainContent {
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
    grid-template-areas: "ul video";
    padding: 25px;
  }
}

@media only screen and (min-width: 992px) {
  #isProjectContainerMainContent {
    grid-template-columns: 60% 40%;
  }
}
</style>
