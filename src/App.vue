<script setup>
import TopicHeader from "./components/TopicHeader.vue";
import NavHeader from "./components/NavHeader.vue";
import TopicMain from "./components/TopicMain.vue";
import ContentMain from "./components/ContentMain.vue";
import VideoDescriptionMain from "./components/VideoDescriptionMain.vue";
import SupportingContentMain from "./components/SupportingContentMain.vue";
</script>

<template>

  <div>
    <header>
      <topic-header class="topic-header" />
      <nav-header class="navHeader" />
    </header>

    <main>
      <topic-main />
      <content-main />
      <video-description-main />
      <supporting-content-main />
    </main>

    <footer>copyright</footer>
  </div>

</template>

<style scoped>
div {
  background-color: pink;
  width: 95%;
  height: 95%;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: 95% auto;
  grid-template-areas: 
                "header main"
                "footer footer";
}

header {
background-color: blue;
grid-area: header;
grid-template-rows: 80% auto;
grid-template-areas: 
              "topic-header"
              "nav-header";
}

.topic-header{
  background-color: beige;
  font-size: 20px;
}

main {
  background-color: black;
  grid-area: main;
}

footer {
  background-color: grey;
  grid-area: footer;
}
</style>
