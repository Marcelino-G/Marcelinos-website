<script setup>
import TopicHeader from "./components/TopicHeader.vue";
import NavHeader from "./components/NavHeader.vue";
import TopicMain from "./components/TopicMain.vue";
import ContentMain from "./components/ContentMain.vue";
import SupportingContentMain from "./components/SupportingContentMain.vue";
// import {useHomeStore} from '@/stores/home'


</script>

<template>
  <div id="mainContainer">
    <router-view/>
  </div>
</template>

<style scoped>
#mainContainer {
  background-color: black;
  width: 85%;
  height: 90%;
}
</style>
