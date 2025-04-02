<script setup>
import SupportingContentHeader from "./SupportingContentHeader.vue";
import { useRoute } from "vue-router";
import { useWebsiteStore } from "@/stores/websiteStore.js";
import { ref, watch } from "vue";

const route = useRoute();
const websiteStore = useWebsiteStore();
let headerImage = ref(websiteStore.homePage.headerImage);
let projectsPage = false;

watch(route, (newRoute, oldRoute) => {
  if (newRoute.name === "projects") {
    headerImage.value = websiteStore.projectsPage.headerImage;
    projectsPage = true;
  } else {
    headerImage.value = websiteStore.homePage.headerImage;
    projectsPage = false;
  }
});
</script>

<template>
  <div id="headerContainer">
    <h1>Marcelino's Website</h1>
    <img alt="ll" :src="headerImage" />
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About me</router-link>
      <router-link :to="{ name: 'projects' }">Projects</router-link>
    </nav>
    <supporting-content-header
      v-if="projectsPage === true"
    ></supporting-content-header>
  </div>
</template>

<style scoped>
#headerContainer {
  height: 100%;
  /* background-color: brown; */
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 10% 70% 20%;
  grid-template-areas:
    "h1 h1"
    "img img"
    "nav supporting-content-header";
}

h1 {
  grid-area: h1;
  /* background-color: pink; */
}
img {
  max-height: 100%;
  max-width: 100%;
  grid-area: img;
  /* background-color: blue; */
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-area: nav;
  /* background-color: orange; */
}
a {
  text-align: center;
  width: 50%;
  text-decoration: none;
  font-size: 1.5em;
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
</style>
