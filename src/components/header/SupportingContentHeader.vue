<script setup>
import { reactive, computed } from "vue";
import { useWeaponSelector } from "@/composables/weaponSelector.js";
import { useWebsiteStore } from "@/stores/websiteStore.js";
import handPointerImage from "@/assets/icons/hand-pointer.png";
import { motion, AnimatePresence } from "motion-v";


import leftFinger from "@/assets/icons/arrow-left.png";
import rightFinger from "@/assets/icons/arrow-right.png";

const websiteStore = useWebsiteStore();
// const weaponImages = websiteStore.getHitImagesAndDescriptions.weaponImages;
// const descriptions = websiteStore.getHitImagesAndDescriptions.descriptions;
let weaponsAndDescriptions = websiteStore.getProjectWeaponImagesAndDescriptions;
let currentProjectWeaponIndex = computed(() => ({
  currentProjectWeaponIndex: websiteStore.projectsPage.currentProjectWeaponIndex,
  forwardProjectWeapon: websiteStore.forwardProjectWeapon,
  backwardProjectWeapon: websiteStore.backwardProjectWeapon,
}))
  
  
  
  
</script>

<template>
  <div>
    <div id="contentContainer">

       <motion.button
        @click="currentProjectWeaponIndex.backwardProjectWeapon"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="leftFinger" />
      </motion.button>

      <div id="weaponContainer">
      <img id="weaponImg" :src="weaponsAndDescriptions.weaponImages[currentProjectWeaponIndex.currentProjectWeaponIndex]"/>
      <p>{{ weaponsAndDescriptions.descriptions[currentProjectWeaponIndex.currentProjectWeaponIndex] }}</p>
      </div>

       <motion.button
        @click="currentProjectWeaponIndex.forwardProjectWeapon"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="rightFinger" />
      </motion.button>
      
    </div>
    <!-- <ul>
      <li
        v-for="(weaponImage, index) in weaponsAndDescriptions.weaponImages"
        :key="index"
        @click="websiteStore.setCurrentProjectHitImageAndSound(index)"
      >
        <img class="weaponImg" :src="weaponImage"/>
        <p>{{ weaponsAndDescriptions.descriptions[index] }}</p>
        <img :class="{isHidden: index !== currentProjectWeaponIndex.currentProjectWeaponIndex}" class="pointer" :src="handPointerImage"/>
      </li>
    </ul> -->
  </div>
</template>

<style scoped>

#contentContainer{
  /* background: red; */
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding-bottom: 25px;
}

#weaponContainer{
  /* background: green; */
  /* text-align: center; */
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

#weaponImg{
  /* flex-basis: 50%; */
  /* max-height: 40%; */
  max-width: 65%;
  max-height: 50%;
  margin: auto;
  /* background: blue; */
  /* margin: 0 auto; */
  /* flex-grow: 1; */
}

#weaponContainer p{
  /* align-self: flex-end; */
  text-align: center;
}

button{
  background: none;
  cursor: pointer;
}

button img{
  width: 18px;
  height: 18px;
}

</style>
