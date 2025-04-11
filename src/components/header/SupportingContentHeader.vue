<script setup>
import { reactive } from "vue";
import { useWeaponSelector } from "@/composables/weaponSelector.js";
import { useWebsiteStore } from '@/stores/websiteStore.js';

const websiteStore = useWebsiteStore();
const weaponImages = websiteStore.getHitImagesAndDescriptions.weaponImages;
const descriptions = websiteStore.getHitImagesAndDescriptions.descriptions;


</script>

<template>
  <div>
    <ul>
      <li v-for="(weaponImage, index) in weaponImages" :key="index" @click="websiteStore.setCurrentHitImageAndSound(index)">
          <img :src="weaponImage" >
          <p>{{ descriptions[index] }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul{
  /* background-color: yellow; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  gap: 10px;
  padding: 15px;
}
li{
  /* background-color: red; */
  /* margin: auto; */
  text-align: center;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  gap: 10px;
}
img{
  max-height: 70%;
  max-width: 70%;
  /* background: green; */
}
</style>
