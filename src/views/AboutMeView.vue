<script setup>
import TopicMain from "@/components/main/TopicMain.vue";
import ContentMain from "@/components/main/ContentMain.vue";
import SupportingContentMain from "@/components/main/SupportingContentMain.vue";

import { ref } from "vue"
import { useWebsiteStore } from '@/stores/websiteStore.js';
const websiteStore = useWebsiteStore();

// let content = ref(websiteStore.aboutMePage.main_content);

let titleContent = { currentAboutTitle: websiteStore.aboutMePage.main_content.currentAboutTitle };
let mainContent = {currentBiography: websiteStore.aboutMePage.main_content.currentBiography };
let supportingContent = {technicalSkills: websiteStore.getAboutTechnicalSkills, questionsAndAnswers: websiteStore.getAboutQuestionsAndAnswers}


</script>

<template>
  <div id="aboutMeContainer">
      <topic-main id="topic-main" :content="titleContent" :isAbout="true" />
      <content-main id="content-main" :content="mainContent" :isAbout="true" />
      <supporting-content-main id="supporting-content-main" :content="supportingContent" :isAbout="true" />

  </div>
</template>

<style scoped>

 #aboutMeContainer{
  height: 100%;
  display: grid;
  grid-template-rows: 10% 60% 30%;
  grid-template-areas:
    "topic-main"
    "content-main"
    "supporting-content-main"; 
}

 #topic-main {
  grid-area: topic-main;
} 

 #content-main {
  grid-area: content-main;
}

#supporting-content-main {
  grid-area: supporting-content-main;
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
  grid-template-rows: 90% 10%;
  grid-template-areas:
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
}  */
</style>
