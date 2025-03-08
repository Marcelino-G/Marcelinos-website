<script setup>


</script>

<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'about'}">About me</router-link>
      <router-link :to="{name: 'projects'}">Projects</router-link>
    </nav>
  </div>
</template>

<style scoped>
nav{
  display: flex;
  flex-direction: column;
  
}
</style>
