<script setup>
import { defineProps } from "vue";
const props = defineProps({
  content: Object,
  isHome: Boolean,
  isAbout: Boolean,
});

// import { useRoute } from "vue-router";
// const route = useRoute();
import { motion, AnimatePresence } from "motion-v";
import leftFinger from "@/assets/icons/arrow-left.png";
import rightFinger from "@/assets/icons/arrow-right.png";
</script>

<template>
  <div>
    <div id="isHomeContainer" v-if="isHome === true">
      <motion.button
        @click="content.backwardIndex"
        :whilePress="{ scale: 0.9 }"
      >
        <img :src="leftFinger" />
      </motion.button>

      <ul id="isHomeUl">
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

      <motion.button @click="content.forwardIndex" :whilePress="{ scale: 0.9 }">
        <img :src="rightFinger" />
      </motion.button>
    </div>
    <div v-if="isAbout === true" id="isAboutContainer">
      <ul id="isAboutUl">
        <li id="stack">
          <ul v-for="(skillCategory, index) in content.funFacts.technical" :key="index">
            <h4>{{index}}</h4>
            <li v-for="(skill, index) in skillCategory" :key="index">
              {{skill}}
            </li>
          </ul>
        </li>
        <li id="faq">
          <ul>
            <li v-for="(question,index) in content.funFacts.questions" :key="index">
              <p>{{question.question}}</p>
              <p>{{question.answer}}</p>
            </li>
          </ul>
        </li>
        <li id="spotify">
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/7y8S1cGlXAeLRRmWk85Nud?utm_source=generator"
            width="100%"
            height="100%"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </li>
      </ul>
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
#supporting-content-main {
  border: solid gray 5px;
  border-radius: 10px;
  background: radial-gradient(at 150% 100%, black, blue);
  /* width: 97%;
  margin: 0 auto; */
}

#isHomeContainer {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}

#isHomeUl {
  display: flex;
  justify-content: center;
  list-style: none;
  height: 100%;
}

#isHomeUl li {
  max-height: 100%;
  margin: 0 -2.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#isHomeUl li img {
  max-width: 90%;
  max-height: 90%;
}

button {
  background: none;
  cursor: pointer;
}

#isAboutContainer {
  /* background: red; */
  height: 100%;
  width: 100%;
}

#isAboutUl {
  height: 100%;
  width: 100%;
  /* display: flex; */
  /* background: blue; */
  /* justify-content: space-evenly; */
  list-style: none;
  display: grid;
  grid-template-columns: 25% 25% 50%;
  grid-template-areas: "stack faq spotify";
}

#isAboutUl li {
  background: red;
  /* width: 100%; */
  /* overflow: auto; */
  /* overflow-y: auto; */
  /* scrollbar-width: auto;
  scrollbar-color: #A9A9A9 rgba(0,0,0,0.4); */
}
</style>
