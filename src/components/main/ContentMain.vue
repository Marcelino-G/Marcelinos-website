<script setup>
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
</script>

<template>
  <div>
    <div v-if="isHome === true">
      <AnimatePresence>
        <motion.img
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
          :key="content.currentIndex"
          :src="content.currentTopicDetail"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo,
          dolores asperiores exercitationem a autem suscipit similique non
          cumque ad, delectus nam excepturi facilis labore optio ratione.
          Repellat, doloremque necessitatibus?
        </motion.p>
      </AnimatePresence>
    </div>

    <div v-if="isProject === true" id="isProjectContainer">
      <AnimatePresence>
        <motion.ul
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
          :key="content.currentIndex"
        >
          <li>
            {{ content.currentDescription }}
          </li>
          <li>
            Completed: {{ content.currentDate }}
          </li>
          <li>
            <a :href="content.currentGithub" target="_blank">GitHub repository</a>
          </li>
          <li v-if="content.currentApplication !== ''">
            <a :href="content.currentApplication" target="_blank">Application</a>
          </li>
        </motion.ul>
        <motion.div
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
          :key="content.currentIndex"
          id="videoContainer"
        >
          <video autoplay muted loop controls poster="" controlsList="nodownload noplaybackrate" >
            <source :src="content.currentMedia" type="video/mp4" />
          </video>
          <img :src="content.currentHitImage" :alt="content.currentHitImage">
        </motion.div>
      </AnimatePresence>
    </div>
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

#isProjectContainer{
  display: grid;
  /* background: red; */
  grid-auto-columns: 50% 50%;
  grid-template-areas: "ul video";
}

#isProjectContainer ul{
  grid-area: ul;
  /* background: green; */
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 25px;
}

#videoContainer{
  grid-area: video;
  background: blue;
  /* position: relative; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* justify-content: center; */
}

#videoContainer video{
/* margin: auto; */
}

#videoContainer img{
  position: absolute;
}




</style>
