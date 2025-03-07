<script setup>
import { useMainStore } from '@/stores/mainStore';
import{ watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mainStore = useMainStore();

onMounted(() => {
  mainStore.setMainTopic(route.fullPath);
})

watch(route, (newRoute, oldRoute) => {
  mainStore.setMainTopic(newRoute.fullPath)
})
</script>

<template>
  <div>
    <h2 v-for="(topic,index) in mainStore.mainTopic" :key="index">{{ topic.description }}</h2>
  </div>
</template>

<style scoped>
</style>
