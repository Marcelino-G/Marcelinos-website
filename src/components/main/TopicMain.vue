<script setup>
import { motion, AnimatePresence } from "motion-v";
import { defineProps } from "vue";
const props = defineProps({
  content: Object,
  isHome: Boolean,
  isAbout: Boolean,
  isProject: Boolean,
});
</script>

<template>
  <div>
    <div v-if="isHome === true">
      <h2 :key="content.currentHomeIndex">
        {{ content.currentHomeTitle }}
      </h2>
    </div>

    <div v-if="isAbout === true">
      <h2>
        {{ content.currentAboutTitle }}
      </h2>
    </div>

    <div v-if="isProject === true">
      <h2 :key="content.currentProjectIndex">
        {{ content.currentProjectTitle }}
      </h2>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h2 {
  text-align: center;
  overflow: auto;
  scrollbar-color: #a9a9a9 rgba(0, 0, 0, 0.4);
  max-height: 100%;
}
</style>
