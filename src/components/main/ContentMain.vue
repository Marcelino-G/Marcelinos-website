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
  isHome: Boolean
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
  </div>
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
img{
  max-width: 850px;
  max-height: 650px;
}

div{
  /* background-color: black; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 1024px) and (max-width: 1440px){
  img{
    max-width: 750px;
  max-height: 550px;
  }
}

</style>
