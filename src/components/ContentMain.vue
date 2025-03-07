<script setup>

import { useRoute } from 'vue-router';
import { watch, onMounted } from 'vue';
import { useMainStore } from '@/stores/mainStore';

const mainStore = useMainStore();
const route = useRoute();

onMounted(() => {
  mainStore.setMainTopic(route.fullPath);
})

watch(route, (newRouter, oldRouter) => {
  mainStore.setMainTopic(newRouter.fullPath)
})



</script>

<template>
  <div>
    <section>
      <img v-for="(topic,index) in mainStore.mainTopic" :src="topic.img" :key="index">
    </section>
  </div>
</template>

<style scoped>
</style>
