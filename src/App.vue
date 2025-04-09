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
  /* background-color: black; */
  grid-area: header;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  padding: 25px 25px;
}

main {
  /* background-color: red; */
  grid-area: main;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  padding: 25px 25px;
}

footer {
  /* background-color: grey; */
  grid-area: footer;
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  padding: 0 25px;
}
</style>
