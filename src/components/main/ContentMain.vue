<script setup>
// import { useRoute } from 'vue-router';
// import { watch, onMounted } from 'vue';
// import { useMainStore } from '@/stores/mainStore';

// const mainStore = useMainStore();
// const route = useRoute();

// onMounted(() => {
//   mainStore.setMainTopic(route.fullPath);
// })

// watch(route, (newRouter, oldRouter) => {
//   mainStore.setMainTopic(newRouter.fullPath)
// })

import { defineProps } from "vue";

const props = defineProps({
  content: Object,
});

import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>
    <section>
      <div v-if="route.fullPath === '/'">
        <img v-for="(topic, index) in content" :src="topic.img" :key="index" />
      </div>
      <div v-if="route.fullPath === '/about'">
        <p v-for="(aboutMe, index) in content" :key="index" >{{ aboutMe }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
