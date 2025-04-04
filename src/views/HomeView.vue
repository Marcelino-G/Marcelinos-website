<script setup>
import TopicMain from "@/components/main/TopicMain.vue";
import ContentMain from "@/components/main/ContentMain.vue";
import SupportingContentMain from "@/components/main/SupportingContentMain.vue";

import { reactive } from "vue"


// let content = ref(websiteStore.homePage.main_content);

import { useSlide } from "@/composables/slide.js";
import { useWebsiteStore } from '@/stores/websiteStore.js';
const websiteStore = useWebsiteStore();
const { currentIndex, currentTitle, currentTopicDetail, supportingDetails, setCurrentIndex, forwardIndex, backwardIndex, forwardIndexInterval} = useSlide(websiteStore.homePage.main_content);

let titleContent = reactive({ currentTitle, currentIndex });
let mainContent = reactive({currentTopicDetail, currentIndex});
let supportingContent = { supportingDetails, setCurrentIndex, forwardIndex, backwardIndex };


</script>

<template>
  <div id="homeContainer">

    
      <topic-main id="topic-main" :content="titleContent"/>
      <content-main id="content-main" :content="mainContent" :isHome="true" />
      <supporting-content-main id="supporting-content-main" :content="supportingContent" />
    
  </div>
</template>

<style scoped>
 #homeContainer {

  height: 100%;
  /* background-color: blue; */
  display: grid;
  grid-template-rows: 10% 70% 20%;
  grid-template-areas:
    "topic-main"
    "content-main"
    "supporting-content-main";
    
}

#topic-main {
  /* background-color: red; */
  grid-area: topic-main;
}

#content-main {
  /* background-color: gold; */
  grid-area: content-main;
}

#supporting-content-main {
  /* background-color: aqua; */
  grid-area: supporting-content-main;
  /* border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  width: 97%;
  margin: 0 auto; */
}

/* header {
  background-color: black;
  grid-area: header;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 90% 10%;
  grid-template-areas:
    "topic-header topic-header"
    "nav-header supporting-content-header";
}

#topic-header {
  grid-area: topic-header;
  background-color: beige;
}

#nav-header {
  background-color: orange;
  grid-area: nav-header;
}

#supporting-content-header {
  grid-area: supporting-content-header;
  background-color: brown;
}

main {
  background-color: black;
  grid-area: main;
  display: grid;
  grid-template-rows: 15% 75% 10%;
  grid-template-areas:
    "topic-main"
    "content-main"
    "supporting-content-main";
}

#topic-main {
  background-color: red;
  grid-area: topic-main;
}

#content-main {
  background-color: gold;
  grid-area: content-main;
}

#supporting-content-main {
  background-color: aqua;
  grid-area: supporting-content-main;
}

footer {
  background-color: grey;
  grid-area: footer;
} */
</style>
