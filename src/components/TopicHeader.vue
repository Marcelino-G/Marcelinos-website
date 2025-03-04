<script setup>
const props = defineProps({
  title: String
})

</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <img src="../assets/logo.svg" />
  </div>
</template>

<style scoped>
</style>
