<script setup>
import SupportingContentHeader from "./SupportingContentHeader.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useWebsiteStore } from "@/stores/websiteStore.js";

const route = useRoute();
const websiteStore = useWebsiteStore();

watch(route, (newRoute, oldRoute) => {
  if (newRoute.name === "projects") {
    websiteStore.setCurrentHeaderImage(websiteStore.projectsPage.headerImage);
    websiteStore.setProjectPage(true);
  } else {
    websiteStore.setCurrentHeaderImage(websiteStore.homePage.headerImage);
    websiteStore.setProjectPage(false);
  }
});
</script>

<template>
  <div id="headerContainer">
    <h1>Marcelino's Website</h1>
    <div id="imageContainer">
      <img alt="ll" :src="websiteStore.getCurrentHeaderImage" />
    </div>

    <div id="navAndSupportingContainer">
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About me</router-link>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </nav>
      <supporting-content-header
        id="supportingContentContainer"
        v-if="websiteStore.getProjectPage"
      ></supporting-content-header>
    </div>
  </div>
</template>

<style scoped>
#headerContainer {
  height: 100%;
  display: grid;
  grid-template-rows: 20% 50% 30%;
  grid-auto-columns: 100%;
  grid-template-areas:
    "h1"
    "imageContainer"
    "navAndSupporting";
}

h1 {
  grid-area: h1;
  text-align: center;
}

#imageContainer {
  grid-area: imageContainer;
  width: 100%;
  height: 70%;
  margin: auto;
  text-align: center;
}

img {
  max-height: 100%;
  max-width: 100%;
}

#navAndSupportingContainer {
  grid-area: navAndSupporting;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  grid-template-areas: "nav supportingContent";
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-area: nav;
}

#supportingContentContainer {
  grid-area: supportingContent;
}

a {
  text-align: center;
  width: 60%;
  text-decoration: none;
  color: #f8f8ff;
}

@keyframes rainbow {
  0% {
    background-position: -170%;
  }
  50% {
    background-position: 170%;
  }
  100% {
    background-position: -170%;
  }
}

.router-link-exact-active {
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    to right,
    #476461,
    #084798,
    #6c0c2e,
    #961ea4,
    #b707af,
    #c1cee3,
    #bec1e0,
    #2db1b7,
    #73c76c,
    #9eae24
  );
  animation: rainbow 1.5s infinite linear;
  background-size: 200% 200%;
}

@media only screen and (max-width: 410px) {
  #headerContainer {
    grid-template-rows: 50% 50%;
  }
}

@media only screen and (max-width: 768px) {
  #navAndSupportingContainer {
    grid-template-areas: "nav nav";
  }

  #supportingContentContainer {
    display: none;
  }
}

@media only screen and (max-width: 992px) {
  #headerContainer {
    grid-template-columns: 40% 60%;
    grid-template-areas:
      "h1 h1"
      "imageContainer navAndSupporting";
  }
  #imageContainer {
    width: 100%;
    height: 80%;
  }
}

@media only screen and (min-width: 410px) {
  #headerContainer {
    grid-template-rows: 30% 70%;
  }
}

@media only screen and (min-width: 768px) {
  #navAndSupportingContainer {
    grid-template-areas: "nav supportingContent";
  }

  #supportingContentContainer {
    display: block;
  }
}

@media only screen and (min-width: 992px) {
  #headerContainer {
    grid-template-rows: 20% 50% 30%;
    grid-template-columns: 100%;
    grid-template-areas:
      "h1"
      "imageContainer"
      "navAndSupporting";
  }

  #imageContainer {
    width: 100%;
    height: 70%;
  }
}
</style>
