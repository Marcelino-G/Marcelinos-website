<script setup>
// import { useMainStore } from '@/stores/mainStore';
// import{ watch, onMounted } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute();
// const mainStore = useMainStore();

// onMounted(() => {
//   mainStore.setMainsupport(route.fullPath);
// })

// watch(route, (newRoute, oldRoute) => {
//   mainStore.setMainsupport(newRoute.fullPath)
// })
import { defineProps } from "vue";

const props = defineProps({
  content: Object,
});

// import { useRoute } from "vue-router";
// const route = useRoute();
</script>

<template>

    <div v-if="content.title === undefined">
      <h2  v-for="(support, index) in content" :key="index">
        {{ support.title }}
      </h2>
    </div>
    <div v-else>
      <h2>{{content.title}}</h2>
    </div>
<!-- 
    <div v-if="route.fullPath === '/projects'">
      <h2 v-for="(support, index) in supports" :key="index">{{ support.name }}</h2>
    </div> -->
</template>

<style scoped>
</style>
