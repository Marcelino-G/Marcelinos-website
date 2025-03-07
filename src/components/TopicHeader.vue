<script setup>
import { watch, onMounted } from "vue";
import { useHeaderStore } from "@/stores/headerStore";
import { useRoute } from "vue-router";

const headerStore = useHeaderStore();
const route = useRoute();

onMounted(() => {
  headerStore.setHeaderTitle(route.fullPath);
  headerStore.setDisplayedImg(route.fullPath);
})

watch(route, (newRoute, oldRoute) => {
  headerStore.setHeaderTitle(newRoute.fullPath);
  headerStore.setDisplayedImg(newRoute.fullPath);
  
});


</script>

<template>
  <div>
    <h1>{{ headerStore.headerTitles.headerTitle }}</h1>
    <img :src="headerStore.profileImages.displayedImg" />
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
