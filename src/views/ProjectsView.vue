<script setup>
import TopicMain from "@/components/main/TopicMain.vue";
import ContentMain from "@/components/main/ContentMain.vue";
import SupportingContentMain from "@/components/main/SupportingContentMain.vue";

import { computed } from "vue";

import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();

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

let supportingContent = computed(() => ({
  titles: websiteStore.getProjectTitles,
  setCurrentProject: websiteStore.setCurrentProject,
  currentProjectIndex: websiteStore.projectsPage.currentProjectIndex,
}));
</script>

<template>
  <div id="projectsContainer">
    <topic-main
      id="topic-main-projects"
      :content="titleContent"
      :isProject="true"
    />
    <content-main
      id="content-main-projects"
      :content="mainContent"
      :isProject="true"
    />
    <supporting-content-main
      id="supporting-content-main-projects"
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

#topic-main-projects {
  grid-area: topic-main;
}

#content-main-projects {
  grid-area: content-main;
}

#supporting-content-main-projects {
  grid-area: supporting-content-main;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
}
</style>
