<script setup>
// import { watch, onMounted } from "vue";
// import { useHomeStore } from "@/stores/homeStore";
// import { useRoute } from "vue-router";

// const headerStore = useHeaderStore();
// const route = useRoute();

// onMounted(() => {
//   headerStore.setSupportingContent(route.fullPath);
// })

// watch(route, (newRoute, oldRoute) => {
//   headerStore.setSupportingContent(newRoute.fullPath);
// });

import { defineProps } from 'vue';
const props = defineProps({
  supportingContent: Object
})

</script>

<template>
  <div>
    <ul>
      <li v-for="(support, index) in supportingContent" :key = "index">
        <a :href="support.link">
          <img :src="support.icon" >
          <p>{{ support.description }}</p>
        </a>
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
