<script setup>
import { useWebsiteStore } from '@/stores/websiteStore.js';
const websiteStore = useWebsiteStore();

</script>

<template>
  <div>
    <ul>
      <li v-for="(support, index) in websiteStore.projectsPage.supporting_content_header" :key = "index">
          <img :src="support.icon" >
          <p>{{ support.description }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul{
  background-color: yellow;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
}
li{
  width: 20%;
}
img{
  width: 100%;
  height: 50%;
}
</style>
