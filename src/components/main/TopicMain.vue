<script setup>
import { defineProps } from "vue";
const props = defineProps({
  content: Object,
});
import { motion, AnimatePresence } from "motion-v";

</script>

<template>
  <div>
    <AnimatePresence>
      <motion.h2
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 5 }"
        :key="content.currentIndex"
      >
        {{content.currentTitle}}
      </motion.h2>
    </AnimatePresence>
    <!-- <p @click="content.forwardTitle">next</p> -->
  </div>
</template>

<style scoped>
</style>
