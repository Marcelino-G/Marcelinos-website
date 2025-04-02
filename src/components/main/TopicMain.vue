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
        :transition="{ duration: 2 }"
        :key="content.currentIndex"
      >
        {{content.currentTitle}}
      </motion.h2>
    </AnimatePresence>
  </div>
</template>

<style scoped>

div{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
