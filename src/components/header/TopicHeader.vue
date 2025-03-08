<script setup>
// import { watch, onMounted } from "vue";
// import { useHeaderStore } from "@/stores/headerStore";
// import { useRoute } from "vue-router";

// const headerStore = useHeaderStore();
// const route = useRoute();

// onMounted(() => {
//   headerStore.setHeaderTitle(route.fullPath);
//   headerStore.setDisplayedImg(route.fullPath);
// })

// watch(route, (newRoute, oldRoute) => {
//   headerStore.setHeaderTitle(newRoute.fullPath);
//   headerStore.setDisplayedImg(newRoute.fullPath);
  
// });

import { defineProps } from 'vue';
const props = defineProps({
  headerTitle : String,
  headerImage: String
})


</script>

<template>
  <div>
    <h1>{{ headerTitle }}</h1>
    <img :src="headerImage" />
  </div>
</template>

<style scoped>
h1 {
  border: solid black 1px;
}

img {
  max-height: 100%;
  max-width: 100%;
}
</style>
