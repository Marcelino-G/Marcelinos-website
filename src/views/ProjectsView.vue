<script setup>
import TopicMain from "@/components/main/TopicMain.vue";
import ContentMain from "@/components/main/ContentMain.vue";
import SupportingContentMain from "@/components/main/SupportingContentMain.vue";

import { computed } from "vue";
// import { useProjectSelector } from "@/composables/projectSelector.js";
// import { useWeaponSelector } from "@/composables/weaponSelector.js";
import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();
// const {setCurrentIndex, currentIndex, currentTitle, titles, currentMedia, currentDate, currentGithub, currentApplication, currentDescription} = useProjectSelector(websiteStore.projectsPage.main_content);
// const {currentWeaponIndex, currentSound } = useWeaponSelector();

// let currentHitImage = websiteStore.projectsPage.currentHitImage

// let titleContent = reactive({currentIndex, currentTitle});
// let mainContent = reactive({currentIndex, currentMedia, currentDate, currentGithub, currentApplication, currentDescription, currentWeaponIndex, currentSound});
// let supportingContent = reactive({titles, setCurrentIndex, currentIndex});

let titleContent = computed(() => ({
  currentProjectTitle: websiteStore.projectsPage.currentProjectTitle,
  currentProjectIndex: websiteStore.projectsPage.currentProjectIndex,
}));
let mainContent = computed(() => ({
  currentProjectVideo: websiteStore.projectsPage.currentProjectVideo,
  currentProjectDate: websiteStore.projectsPage.currentProjectDate,
  currentProjectGithub: websiteStore.projectsPage.currentProjectGithub,
  currentProjectApplication:
    websiteStore.projectsPage.currentProjectApplication,
  currentProjectDescription:
    websiteStore.projectsPage.currentProjectDescription,

  currentProjectHitImage: websiteStore.projectsPage.currentProjectHitImage,
  currenProjecttSound: websiteStore.projectsPage.currentProjectSound,
  currentProjectWeaponIndex:
    websiteStore.projectsPage.currentProjectWeaponIndex,

  currentProjectIndex: websiteStore.projectsPage.currentProjectIndex,
}));
let supportingContent = {
  titles: websiteStore.getProjectTitles,
  setCurrentProject: websiteStore.setCurrentProject,

};
</script>

<template>
  <div id="projectsContainer">
    <topic-main id="topic-main" :content="titleContent" :isProject="true" />
    <content-main id="content-main" :content="mainContent" :isProject="true" />
    <supporting-content-main
      id="supporting-content-main"
      :content="supportingContent"
      :isProject="true"
    />
  </div>
</template>

<style scoped>
#projectsContainer {
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
  overflow: auto;
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
}  */
</style>
