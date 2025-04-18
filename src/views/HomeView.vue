<script setup>
import TopicMain from "@/components/main/TopicMain.vue";
import ContentMain from "@/components/main/ContentMain.vue";
import SupportingContentMain from "@/components/main/SupportingContentMain.vue";

import { computed } from "vue";
import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();

let titleContent = computed(() => ({
  currentHomeTitle: websiteStore.homePage.currentHomeTitle,
  currentHomeIndex: websiteStore.homePage.currentHomeIndex,
}));

// let mainContent = computed(() => ({
//   currentHomeImage: websiteStore.homePage.currentHomeImage,
//   currentHomeAltText: websiteStore.homePage.currentHomeAltText,
//   currentHomeIndex: websiteStore.homePage.currentHomeIndex,
// }));

let supportingContent = computed(() => ({
  homeImages: websiteStore.getHomeImages,
  setCurrentHomeTitleAndImage: websiteStore.setCurrentHomeTitleAndImage,
  forwardHomeTitleAndImage: websiteStore.forwardHomeTitleAndImage,
  backwardHomeTitleAndImage: websiteStore.backwardHomeTitleAndImage,
  currentHomeIndex: websiteStore.homePage.currentHomeIndex,
}));
</script>

<template>
  <div id="homeContainer">
    <topic-main id="topic-main-home" :content="titleContent" :isHome="true" />
    <content-main
      id="content-main-home"
      
      :isHome="true"
    />
    <supporting-content-main
      id="supporting-content-main-home"
      :content="supportingContent"
      :isHome="true"
    />
  </div>
</template>

<style scoped>
#homeContainer {
  height: 100%;
  display: grid;
  grid-template-rows: 10% 60% 30%;
  grid-template-columns: 100%;
  grid-template-areas:
    "topic-main"
    "content-main"
    "supporting-content-main";
}

#topic-main-home {
  grid-area: topic-main;
}

#content-main-home {
  grid-area: content-main;
}

#supporting-content-main-home {
  grid-area: supporting-content-main;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
}
</style>
