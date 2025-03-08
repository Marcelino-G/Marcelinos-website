<script setup>

import { defineProps } from "vue";
const props = defineProps({
  supportingContent: Object
})

import { useRoute } from 'vue-router';
const route = useRoute();



</script>

<template>
  <div>
    <section>
      <div v-if="route.fullPath === '/'">
        <img v-for="(topic,index) in supportingContent" :src="topic.img" :key="index">
      </div>
      <div v-if="route.fullPath === '/about'">
        <p v-for="(topic,index) in supportingContent.frontEnd" :key="index">
          {{ topic }}
        </p>
      </div>
      
    </section>
  </div>
</template>

<style scoped>
</style>
