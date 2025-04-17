<script setup>
import FooterComponentVue from "./components/FooterComponent.vue";
import HeaderComponentVue from "./components/header/HeaderComponent.vue";
import CreditsComponent from "./components/CreditsComponent.vue";

import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();
</script>

<template>
  <div id="mainContainer">
    <header>
      <header-component-vue></header-component-vue>
    </header>
    <main>
      <credits-component
        v-if="websiteStore.isCredits"
        id="creditsContainer"
      ></credits-component>
      <router-view v-if="!websiteStore.isCredits" />
    </main>
    <footer>
      <footer-component-vue></footer-component-vue>
    </footer>
  </div>
</template>

<style scoped>
#mainContainer {
  width: 90%;
  height: 90%;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 90% 10%;
  grid-template-areas:
    "header main"
    "footer footer";
  gap: 10px;
}

header {
  grid-area: header;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  padding: 25px 25px;
}

#creditsContainer {
  height: 100%;
  width: 100%;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  padding: 25px 25px;
}

main {
  grid-area: main;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  padding: 25px 25px;
}

footer {
  grid-area: footer;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  padding: 0 25px;
}

@media only screen and (max-width: 992px) {
  #mainContainer {
    grid-template-columns: 100%;
    grid-template-rows: 30% 60% 10%;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
}

@media only screen and (min-width: 992px) {
  #mainContainer {
    grid-template-columns: 30% 70%;
    grid-template-rows: 90% 10%;
    grid-template-areas:
      "header main"
      "footer footer";
  }
}
</style>
