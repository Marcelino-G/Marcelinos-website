<script setup>
import SupportingContentHeader from "./SupportingContentHeader.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useWebsiteStore } from "@/stores/websiteStore.js";
import { motion, AnimatePresence } from "motion-v";

const route = useRoute();
const websiteStore = useWebsiteStore();

watch(route, (newRoute, oldRoute) => {
  if (newRoute.name === "projects") {
    websiteStore.setCurrentHeaderImage(true);
    websiteStore.setProjectPage(true);
  } else {
    websiteStore.setCurrentHeaderImage(false);
    websiteStore.setProjectPage(false);
  }
});
</script>

<template>
  <div id="headerContainer">
    <h1>Marcelino's Website</h1>
    <div id="imageContainer">
      <img
        v-if="!websiteStore.getProjectPage"
        alt="profile picture"
        :src="websiteStore.getCurrentHeaderImage"
      />

      <div id="projectPageImages" v-else>
        <motion.div
          :key="websiteStore.getCurrentProjectWeaponIndex"
          class="headerImageMediumInterface"
          :initial="{ scale: 1 }"
          :animate="{ scale: 0.8 }"
          :transition="{ duration: 1 }"
        >
          <AnimatePresence>
            <motion.img
              alt="profile picture"
              :src="websiteStore.getCurrentHeaderImage"
              :key="websiteStore.getCurrentProjectIndex"
              :initial="{ x: 0, opacity: 0.5 }"
              :animate="{ opacity: 1 }"
              :exit="{ x: '75%', rotate: 10 }"
            />
          </AnimatePresence>
        </motion.div>

        <img
          class="headerImageSmallInterface"
          alt="profile picture"
          :src="websiteStore.getCurrentHeaderImage"
        />
      </div>
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
  grid-template-columns: 100%;
}

h1 {
  grid-area: h1;
  text-align: center;
}

#imageContainer {
  grid-area: imageContainer;
  width: 100%;
  max-height: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  /* background: red; */
}

#projectPageImages {
  height: 100%;
  width: 100%;
  /* background: green; */
}

.headerImageMediumInterface {
  /* background: grey; */
  height: 100%;
  width: 100%;
  position: relative;
}

.headerImageMediumInterface img {
  /* background: grey; */
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 5%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  /* background: purple; */
}

img {
  max-height: 100%;
  max-width: 100%;
  /* position: absolute; */
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto; */
  /* background: radial-gradient(at 150% 100%, black, blue); */
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
    grid-template-rows: auto 70%;
  }

  h1 {
    font-size: 0.95rem;
  }
}

@media only screen and (max-width: 768px) {
  #navAndSupportingContainer {
    grid-template-areas: "nav nav";
  }

  #supportingContentContainer {
    display: none;
  }

  .headerImageMediumInterface {
    display: none;
  }
}

@media only screen and (max-width: 992px) {
  #headerContainer {
    grid-template-columns: auto 70%;
    gap: 10px;
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

  .headerImageSmallInterface {
    display: none;
  }

  .headerImageMediumInterface {
    display: block;
  }
}

@media only screen and (min-width: 992px) {
  #headerContainer {
    grid-template-rows: 15% 60% 25%;
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
