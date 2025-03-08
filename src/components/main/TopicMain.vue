<script setup>
// import { useMainStore } from '@/stores/mainStore';
// import{ watch, onMounted } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute();
// const mainStore = useMainStore();

// onMounted(() => {
//   mainStore.setMainTopic(route.fullPath);
// })

// watch(route, (newRoute, oldRoute) => {
//   mainStore.setMainTopic(newRoute.fullPath)
// })
import { defineProps } from 'vue';

const props = defineProps({
  topics: Object
})

</script>

<template>
  <div>
    <h2 v-for="(topic,index) in topics" :key="index">{{ topic.description }}</h2>
  </div>
</template>

<style scoped>
</style>
