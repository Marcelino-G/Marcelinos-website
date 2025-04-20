<script setup>
import TopicMain from "@/components/main/TopicMain.vue";
import ContentMain from "@/components/main/ContentMain.vue";
import SupportingContentMain from "@/components/main/SupportingContentMain.vue";

import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();

let titleContent = {
  currentAboutTitle: websiteStore.aboutMePage.main_content.currentAboutTitle,
};
let mainContent = {
  currentBiography: websiteStore.aboutMePage.main_content.currentBiography,
};
let supportingContent = {
  technicalSkills: websiteStore.getAboutTechnicalSkills,
  questionsAndAnswers: websiteStore.getAboutQuestionsAndAnswers,
};
</script>

<template>
  <div id="aboutMeContainer">
    <topic-main
      id="topic-main-about-me"
      :content="titleContent"
      :isAbout="true"
    />
    <content-main
      id="content-main-about-me"
      :content="mainContent"
      :isAbout="true"
    />
    <supporting-content-main
      id="supporting-content-main-about-me"
      :content="supportingContent"
      :isAbout="true"
    />
  </div>
</template>

<style scoped>
#aboutMeContainer {
  height: 100%;
  display: grid;
  grid-template-rows: 15% 60% 25%;
  grid-template-columns: 100%;
  grid-template-areas:
    "topic-main"
    "content-main"
    "supporting-content-main";
}

#topic-main-about-me {
  grid-area: topic-main;
}

#content-main-about-me {
  grid-area: content-main;
}

#supporting-content-main-about-me {
  grid-area: supporting-content-main;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
}
</style>
