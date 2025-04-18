<script setup>
import { motion, AnimatePresence } from "motion-v";
import { defineProps } from "vue";
const props = defineProps({
  content: Object,
  isHome: Boolean,
  isAbout: Boolean,
  isProject: Boolean
});

</script>

<template>
  <div>
    <div v-if="isHome === true">
        <motion.h2
          :initial="{ y: -35 }"
          :animate="{ y: 0 }"
          :key="content.currentHomeIndex"
        >
          {{ content.currentHomeTitle }}
        </motion.h2>
    </div>




    <div v-if="isAbout === true">
      <AnimatePresence>
        <motion.h2
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
        >
          {{ content.currentAboutTitle }}
        </motion.h2>
      </AnimatePresence>
    </div>

    <div v-if="isProject === true">
      <AnimatePresence>
        <motion.h2
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 2 }"
          :key="content.currentProjectIndex"
        >
          {{ content.currentProjectTitle }}
        </motion.h2>
      </AnimatePresence>
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

h2{
  text-align: center;
  overflow: auto;
  max-height: 100%;
}
</style>
