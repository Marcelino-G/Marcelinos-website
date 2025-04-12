<script setup>
import { reactive, computed } from "vue";
import { useWeaponSelector } from "@/composables/weaponSelector.js";
import { useWebsiteStore } from "@/stores/websiteStore.js";
import handPointerImage from "@/assets/icons/hand-pointer.png";

const websiteStore = useWebsiteStore();
// const weaponImages = websiteStore.getHitImagesAndDescriptions.weaponImages;
// const descriptions = websiteStore.getHitImagesAndDescriptions.descriptions;
let weaponsAndDescriptions = websiteStore.getProjectWeaponImagesAndDescriptions;
let currentProjectWeaponIndex = computed(() => ({
  currentProjectWeaponIndex: websiteStore.projectsPage.currentProjectWeaponIndex
}))
  
  
  
  
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(weaponImage, index) in weaponsAndDescriptions.weaponImages"
        :key="index"
        @click="websiteStore.setCurrentProjectHitImageAndSound(index)"
      >
        <img :src="weaponImage"/>
        <p>{{ weaponsAndDescriptions.descriptions[index] }}</p>
        <img :class="{isHidden: index !== currentProjectWeaponIndex.currentProjectWeaponIndex}" class="pointer" :src="handPointerImage"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  background-color: yellow;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  list-style: none;
  gap: 10px;
  padding: 15px;
}
li {
  background-color: red;
  /* margin: auto; */
  text-align: center;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
  cursor: pointer;
  /* gap: 2%; */


  /* gap: 10px; */
}

li img{
  flex-basis: 50%;
  /* height: 100%; */
  width: 100%;
  height: 100%;
  background: blue;
  margin: 0 auto;
  /* flex-grow: 1; */
}

li p{
  /* margin: 15px 0; */
  flex-basis: 30%;
  /* height: 100%; */
  background: blue;
  width: 100%;
  height: 100%;
  /* padding-top: 20%; */
  margin: auto;
}

.pointer{
  flex-basis: 20%;
  width: 100%;
  height: 100%;
  background: blue;
  /* margin: 0 auto; */
  
}

img {
  max-height: 40%;
  max-width: 40%;
  /* background: green; */
}

.isHidden{
  visibility: hidden;
}
</style>
