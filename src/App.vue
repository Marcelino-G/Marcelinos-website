<script setup>
import FooterComponentVue from "./components/FooterComponent.vue";
import HeaderComponentVue from "./components/header/HeaderComponent.vue";
</script>

<template>
  <div id="mainContainer">
    <header>
      <header-component-vue></header-component-vue>
    </header>
    <main>
      <router-view/>

    </main>
    <footer>
      <footer-component-vue></footer-component-vue>
    </footer>
  </div>
</template>

<style scoped>
#mainContainer {
  background-color: white;
  width: 85%;
  height: 90%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 94% 6%;
  grid-template-areas:
    "header main"
    "footer footer";
}

header {
  /* background-color: black; */
  grid-area: header;
}

main {
  /* background-color: red; */
  grid-area: main;
}

footer {
  /* background-color: grey; */
  grid-area: footer;
}
</style>
