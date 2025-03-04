<script setup>
import TopicHeader from "./components/TopicHeader.vue";
import NavHeader from "./components/NavHeader.vue";
import TopicMain from "./components/TopicMain.vue";
import ContentMain from "./components/ContentMain.vue";
import SupportingContentMain from "./components/SupportingContentMain.vue";
import {useHomeStore} from '@/stores/home'

const home = useHomeStore();

console.log(home.id);


</script>

<template>
  <div id="mainContainer">
    <header>
      <topic-header :title="home.id === 1? home.linkName : 'no'" id="topic-header" />
      <nav-header id="nav-header" />
    </header>

    <main>
      <router-view/>
    </main>

    <footer>copyright</footer>
  </div>
</template>

<style scoped>
#mainContainer {
  background-color: pink;
  width: 85%;
  height: 90%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 95% auto;
  grid-template-areas:
    "header main"
    "footer footer";
}

header {
  background-color: blue;
  display: grid;
  grid-area: header;
  grid-template-rows: 90% 10%;
  grid-template-areas:
    "topic-header"
    "nav-header";
}

#topic-header {
  background-color: beige;
  grid-area: topic-header;
}

#nav-header {
  background-color: orange;
  grid-area: nav-header;
}

main {
  background-color: black;
  /* display: grid; */
  grid-area: main;
  /* grid-template-rows: 10% 70% 10% 10% ;
  grid-template-areas:
    "topic-main"
    "content-main"
    "video-description-main"
    "supporting-content-main"; */
}

/* #topic-main{
  background-color: red;
  grid-area: topic-main;
}

#content-main{
  background-color: gold;
  grid-area: content-main;
}

#video-description-main{
  background-color: purple;
  grid-area: video-description-main;
}

#supporting-content-main{
  background-color: aqua;
  grid-area: supporting-content-main;
} */

footer {
  background-color: grey;
  grid-area: footer;
}
</style>
