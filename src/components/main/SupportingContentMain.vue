<script setup>
import { defineProps } from "vue";
const props = defineProps({
  content: Object,
});

// import { useRoute } from "vue-router";
// const route = useRoute();
</script>

<template>
  <div>

    <div v-if="content.funFacts === undefined">
      <div v-for="(support, index) in content" :key="index">
        <img v-if='support.img !== undefined' :src="support.img"/>
        <p v-if='support.description !== undefined'>{{ support.description }}</p>
      </div>

    </div>

    <div v-else>
      
      <ul>
        <li v-for="(support, index) in content.funFacts.technical" :key="index">{{support}}</li>
      </ul>

      <ul>
        <li v-for="(support, index) in content.funFacts.games" :key="index">{{support}}</li>
      </ul>
    </div>
      


      <!-- <div v-if="route.fullPath === '/'">
        <img
          v-for="(topic, index) in supportingContent"
          :src="topic.img"
          :key="index"
        />
      </div>
      <div v-if="route.fullPath === '/about'">
        <p v-for="(topic, index) in supportingContent.frontEnd" :key="index">
          {{ topic }}
        </p>
      </div>
      <div v-if="route.fullPath === '/projects'">
        <p v-for="(topic, index) in supportingContent" :key="index">
          {{ topic.name }}
        </p>
      </div> -->
  </div>
</template>

<style scoped>
</style>
