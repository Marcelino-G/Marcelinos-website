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
    <div v-if="isProject === true">
      <AnimatePresence>
        <motion.ul
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
          :key="content.currentIndex"
        >
          <li>
            <video>
              <source :src="content.currentMedia" type="video/mp4" />
            </video>
          </li>
          <li>
            {{content.currentDate}}
          </li>
          <li>
            {{content.currentDescription}}
          </li>
          <li>
            {{content.currentGithub}}
          </li>
          <li>
            {{content.currentApplication}}
          </li>
        </motion.ul>

        <!-- <motion.video
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
          :key="content.currentIndex"
        >
          <source :src="content.currentMedia" type="video/mp4" />
        </motion.video> -->
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
}
</style>
