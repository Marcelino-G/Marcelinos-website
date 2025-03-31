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
});

// import { useRoute } from "vue-router";
// const route = useRoute();
</script>

<template>
  <div>
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
    </div>

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
  </div>
</template>

<style scoped>
</style>
