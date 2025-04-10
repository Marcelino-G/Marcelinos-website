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
    <div id="navAndSupportingContainer">
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About me</router-link>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </nav>
      <supporting-content-header
        id="supportingContentContainer"
        v-if="projectsPage === true"
      ></supporting-content-header>
    </div>
  </div>
</template>

<style scoped>
#headerContainer {
  height: 100%;
  display: grid;
  /* gap: 1%; */
  grid-template-rows: 10% 60% 30%;
  grid-template-areas:
    "h1"
    "img"
    "navAndSupporting";
}

h1 {
  grid-area: h1;
  text-align: center;
}
img {
  max-height: 100%;
  max-width: 100%;
  grid-area: img;
  margin: auto 0;
}

#navAndSupportingContainer{
  grid-area: navAndSupporting;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  grid-template-areas: "nav supportingContent";
  /* width: 97%;
  margin: 0 auto; */
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-area: nav;
}

#supportingContentContainer{
  grid-area: supportingContent;
}

a {
  text-align: center;
  width: 60%;
  text-decoration: none;
  font-size: 1.5em;
  color: #F8F8FF;
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

@media screen and (min-width: 1024px) and (max-width: 1440px){
  a{
    font-size: 1.25em;
  }
  /* img{
  max-height: 90%;
  max-width: 90%;
    
  } */
}
</style>
