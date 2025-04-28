<script setup>
import { computed } from "vue";
import { useWebsiteStore } from "@/stores/websiteStore.js";
import { motion, AnimatePresence } from "motion-v";

import leftFinger from "@/assets/icons/arrow-left.png";
import rightFinger from "@/assets/icons/arrow-right.png";

const websiteStore = useWebsiteStore();

let weaponsAndDescriptions = websiteStore.getProjectWeaponImagesAndDescriptions;
let currentProjectWeaponIndex = computed(() => ({
  currentProjectWeaponIndex:
    websiteStore.projectsPage.currentProjectWeaponIndex,
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
        id="button1"
        @click="websiteStore.backwardProjectWeapon"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="leftFinger" alt="Left arrow button." />
      </motion.button>

      <!-- <p v-if="websiteStore.projectsPage.isProjectWeaponImageLoading">loading...</p> -->
      <div
        id="weaponContainer"
        v-show="!websiteStore.projectsPage.isProjectWeaponImageLoading"
      >
        <img
          @load="websiteStore.setProjectWeaponImageLoading()"
          class="weaponImages"
          :src="
            websiteStore.getCurrentProjectWeaponImageAndDescription.weaponImage
          "
          :alt="
            websiteStore.getCurrentProjectWeaponImageAndDescription
              .weaponDescription
          "
        />
        <p class="weaponDescriptions">
          {{
            websiteStore.getCurrentProjectWeaponImageAndDescription
              .weaponDescription
          }}
        </p>
      </div>

      <motion.button
        id="button2"
        @click="websiteStore.forwardProjectWeapon"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="rightFinger" alt="Right arrow button." />
      </motion.button>
    </div>
  </div>
</template>

<style scoped>
#contentContainer {
  height: 100%;
  width: 100%;
  /* margin: auto; */
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 100%;
  grid-template-areas: "button1 weapon button2";
  justify-items: center;
  align-items: flex-end;
  padding: 0 10px;
  /* background: red; */
}

#muteContainer {
  align-self: flex-start;
  text-align: center;
  margin-top: 5px;
}

#weaponContainer {
  grid-area: weapon;
  align-self: flex-start;
  height: 80%;
  width: 50%;
  min-width: 90px;
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

#button1 {
  grid-area: button1;
}

#button2 {
  grid-area: button2;
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
