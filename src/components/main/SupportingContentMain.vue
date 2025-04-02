<script setup>
import { defineProps } from "vue";
const props = defineProps({
  content: Object,
});

// import { useRoute } from "vue-router";
// const route = useRoute();
import { motion, AnimatePresence } from "motion-v";
import rightFinger from "@/assets/arrow-right.png";
import leftFinger from "@/assets/arrow-left.png"
</script>

<template>
  <div>
    <div id="isHomeContainer">
     
     <motion.button @click="content.backwardIndex" :whilePress="{ scale: 0.8 }">
      <img :src="leftFinger" />

     </motion.button>
        
      
      <ul>
        <AnimatePresence
          v-for="(detail, index) in content.supportingDetails"
          :key="index"
        >
          <motion.li
            :initial="{ opacity: 0.75, rotateX: 10, rotateY: 65, zIndex: 0 }"
            :whileHover="{
              opacity: 1,
              rotateX: 0,
              rotateY: 0,
              scale: 1.2,
              zIndex: 1,
            }"
            :transition="{ duration: 1 }"
            :key="index"
            @click="content.setCurrentIndex(index)"
          >
            <img :src="detail" />
          </motion.li>
        </AnimatePresence>
      </ul>
      
      <motion.button @click="content.forwardIndex" :whilePress="{ scale: 0.8 }">
        <img :src="rightFinger"  />




      </motion.button>
        
      
    </div>

    <!-- <div v-if="content.funFacts === undefined">
      <div v-for="(support, index) in content" :key="index">
        <img v-if='support.img !== undefined' :src="support.img"/>
        <p v-if='support.description !== undefined'>{{ support.description }}</p>
      </div>

    </div>

    <div v-else>
      
      <ul>
        <li v-for="(support, index) in content.funFacts.technical" :key="index">{{support}}</li>
      </ul>

      <ul>
        <li v-for="(support, index) in content.funFacts.games" :key="index">{{support}}</li>
      </ul>
    </div> -->

    <!-- <div v-if="route.fullPath === '/'">
        <img
          v-for="(topic, index) in supportingContent"
          :src="topic.img"
          :key="index"
        />
      </div>
      <div v-if="route.fullPath === '/about'">
        <p v-for="(topic, index) in supportingContent.frontEnd" :key="index">
          {{ topic }}
        </p>
      </div>
      <div v-if="route.fullPath === '/projects'">
        <p v-for="(topic, index) in supportingContent" :key="index">
          {{ topic.name }}
        </p>
      </div> -->
  </div>
</template>

<style scoped>
/* div{
  height: 100%;
} */

#isHomeContainer{
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 200px;
}


img {
  max-width: 200px;
  max-height: 150px;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  height: 100%;
  /* background-color: red; */
}

li {
  display: flex;
  margin: 0 -20px;
}
</style>
