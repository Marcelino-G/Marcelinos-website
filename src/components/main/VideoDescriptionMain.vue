<script setup>

import { defineProps } from "vue";

const props = defineProps({
  videoDescription: String
});


</script>

<template>
  <div>
    <p>{{ videoDescription }}</p>
  </div>
</template>

<style scoped>
</style>
