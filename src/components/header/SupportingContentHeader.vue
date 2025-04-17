<script setup>
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/websiteStore.js";
import { motion, AnimatePresence } from "motion-v";

import leftFinger from "@/assets/icons/arrow-left.png";
import rightFinger from "@/assets/icons/arrow-right.png";

const websiteStore = useWebsiteStore();

let weaponsAndDescriptions = websiteStore.getProjectWeaponImagesAndDescriptions;
let currentProjectWeaponIndex = computed(() => ({
  currentProjectWeaponIndex: websiteStore.projectsPage.currentProjectWeaponIndex
}));
</script>

<template>
  <div>
    <div id="contentContainer">
      <!-- <div id="muteContainer">
        <label for="mute">Mute</label>
        <input type="checkbox" id="mute" name="mute" @click="websiteStore.setMute" />
      </div> -->
      <motion.button
        @click="websiteStore.backwardProjectWeapon"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="leftFinger" />
      </motion.button>

      <div id="weaponContainer">
        <img
          class="weaponImages"
          :src="
            weaponsAndDescriptions.weaponImages[
              currentProjectWeaponIndex.currentProjectWeaponIndex
            ]
          "
        />
        <p class="weaponDescriptions">
          {{
            weaponsAndDescriptions.descriptions[
              currentProjectWeaponIndex.currentProjectWeaponIndex
            ]
          }}
        </p>
      </div>

      <motion.button
        @click="websiteStore.forwardProjectWeapon"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="rightFinger" />
      </motion.button>
    </div>
  </div>
</template>

<style scoped>
#contentContainer {
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 10px;
}

#muteContainer{
  align-self: flex-start;
  text-align: center;
  margin-top: 5px;
}

#weaponContainer {
  align-self: flex-start;
  height: 80%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weaponImages {
  max-width: 65%;
  max-height: 50%;
  margin: auto;
}

.weaponDescriptions {
  text-align: center;
}

button {
  background: none;
  cursor: pointer;
  display: flex;
  margin-bottom: 10px;
}

button img {
  width: 18px;
  height: 18px;
}
</style>
