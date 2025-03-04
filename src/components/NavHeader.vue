<script setup>
import {useNavStore} from '@/stores/nav';

const nav = useNavStore();
console.log(nav.links)
</script>

<template>
  <div>
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'about'}">About me</router-link>
      <router-link :to="{name: 'projects'}">Projects</router-link>
      <router-link :to="{name: 'contact'}">Contact</router-link>
    </nav>
  </div>
</template>

<style scoped>
</style>
