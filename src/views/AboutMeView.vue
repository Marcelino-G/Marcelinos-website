<script setup>
import TopicMain from "../components/TopicMain.vue";
import ContentMain from "../components/ContentMain.vue";
import SupportingContentMain from "../components/SupportingContentMain.vue";
</script>

<template>
  <div id="homeMain">
    <topic-main id="topic-main" />
    <content-main id="content-main" />
    <supporting-content-main id="supporting-content-main" />
  </div>
</template>

<style scoped>
#homeMain {
  height: 100%;
  background-color: white;
  display: grid;
  grid-template-rows: 15% 75% 10%;
  grid-template-areas:
    "topic-main"
    "content-main"
    "supporting-content-main";
}

#topic-main {
  background-color: red;
  grid-area: topic-main;
}

#content-main {
  background-color: pink;
  grid-area: content-main;
}

#supporting-content-main {
  background-color: aqua;
  grid-area: supporting-content-main;
}
</style>
