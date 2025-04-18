<script setup>
import linkedInImage from "@/assets/icons/linkedin.png";
import githubImage from "@/assets/icons/github.png";
import envelopeImage from "@/assets/icons/envelope.png";
import greenMateria from "@/assets/icons/circle-green.png";
import blueMateria from "@/assets/icons/circle-blue.png";
import purpleMateria from "@/assets/icons/circle-purple.png";
import leftFinger from "@/assets/icons/arrow-left.png";
import rightFinger from "@/assets/icons/arrow-right.png";

import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();
</script>

<template>
  <div>
    <ul>
      <h2>From: Font Awesome</h2>
      <li>
        <a
          href="https://fontawesome.com/icons/linkedin?f=classic&s=brands"
          target="_blank"
        >
          <img :src="linkedInImage" alt="LinkedIn logo" />
          <p>LinkedIn logo</p>
        </a>
      </li>
      <li>
        <a
          href="https://fontawesome.com/icons/github?f=classic&s=brands"
          target="_blank"
        >
          <img :src="githubImage" alt="GitHub logo" />
          <p>GitHub logo</p>
        </a>
      </li>
      <li>
        <a
          href="https://fontawesome.com/icons/envelope?f=classic&s=solid"
          target="_blank"
        >
          <img :src="envelopeImage" alt="Envelope icon" />
          <p>Envelope icon</p>
        </a>
      </li>
      <li>
        <a
          href="https://fontawesome.com/icons/circle?f=classic&s=solid"
          target="_blank"
        >
          <img :src="greenMateria" alt="Green Materia circle" />
          <p>Circle icon</p>
        </a>
      </li>
      <li>
        <a
          href="https://fontawesome.com/icons/circle?f=classic&s=solid"
          target="_blank"
        >
          <img :src="blueMateria" alt="Blue Materia circle" />
          <p>Circle icon</p>
        </a>
      </li>
      <li>
        <a
          href="https://fontawesome.com/icons/circle?f=classic&s=solid"
          target="_blank"
        >
          <img :src="purpleMateria" alt="Purple Materia circle" />
          <p>Circle icon</p>
        </a>
      </li>
      <li>
        <a
          href="https://fontawesome.com/icons/arrow-left?f=classic&s=solid"
          target="_blank"
        >
          <img :src="leftFinger" alt="Left arrow button" />
          <p>Left arrow icon</p>
        </a>
      </li>
      <li>
        <a
          href="https://fontawesome.com/icons/arrow-right?f=classic&s=solid"
          target="_blank"
        >
          <img :src="rightFinger" alt="Right arrow button" />
          <p>Right arrow icon</p>
        </a>
      </li>
    </ul>
    <ul>
      <h2>From: Final Fantasy Fandom</h2>
      <li
        v-for="(weaponImg, index) in websiteStore
          .getProjectWeaponImagesAndDescriptions.weaponImages"
        :key="index"
      >
        <a :href="websiteStore.getWeaponImageLinks[index]" target="_blank">
          <img :src="weaponImg" :alt="websiteStore.getProjectWeaponImagesAndDescriptions.descriptions[
                index]" />
          <p>
            {{
              websiteStore.getProjectWeaponImagesAndDescriptions.descriptions[
                index
              ]
            }}
          </p>
        </a>
      </li>
    </ul>
    <ul>
      <h2>From: Pixabay (edited with Gimp)</h2>
      <li v-for="(hitImg, index) in websiteStore.getHitImages" :key="index">
        <a :href="websiteStore.getHitImageLinks[index]" target="_blank">
          <img :src="hitImg" :alt="websiteStore.getProjectWeaponImagesAndDescriptions.descriptions[
                index
              ] + ' hit image'" />
          <p>
            {{
              websiteStore.getProjectWeaponImagesAndDescriptions.descriptions[
                index
              ]
            }}
            hit image
          </p>
        </a>
        <a :href="websiteStore.getSoundLinks[index]" target="_blank">
          <p class="soundLink">
            {{
              websiteStore.getProjectWeaponImagesAndDescriptions.descriptions[
                index
              ]
            }}
            hit sound
          </p>
        </a>
      </li>
    </ul>
    <button @click="websiteStore.setCredits">Exit</button>
  </div>
</template>

<style scoped>
#creditsContainer {
  display: flex;
  justify-content: space-evenly;
  overflow: auto;
}

#creditsContainer ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

button {
  align-self: flex-start;
  width: 100px;
  cursor: pointer;
}

a {
  color: #f8f8ff;
}

.soundLink {
  margin-top: 5px;
}

@media only screen and (max-width: 768px) {
  #creditsContainer {
    flex-direction: column;
  }

  #creditsContainer ul {
    padding: 15px 0;
  }

  img {
    max-height: 50px;
    max-width: 50px;
  }
}

@media only screen and (min-width: 768px) {
  #creditsContainer {
    flex-direction: row;
  }

  #creditsContainer ul {
    padding: 20px 0;
  }

  img {
    max-height: 70px;
    max-width: 70px;
  }
}
</style>
