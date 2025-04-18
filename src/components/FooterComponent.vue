<script setup>
import linkedInImage from "@/assets/icons/linkedin.png";
import githubImage from "@/assets/icons/github.png";
import envelopeImage from "@/assets/icons/envelope.png";
import greenMateria from "@/assets/icons/circle-green.png";
import blueMateria from "@/assets/icons/circle-blue.png";
import purpleMateria from "@/assets/icons/circle-purple.png";

import { useWebsiteStore } from "@/stores/websiteStore.js";
const websiteStore = useWebsiteStore();
</script>

<template>
  <div id="footerContainer">
    <div id="rightsContainer">
      <button @click="websiteStore.setCredits">Source Materials</button>
      <p>Copyright © 2025 Marcelino Gamino. All Rights Reserved.</p>
    </div>

    <div id="iconContainer">
      <ul id="professionalIcons">
        <li>
          <a
            href="https://www.linkedin.com/in/marcelino-gamino/"
            target="_blank"
          >
            <img :src="linkedInImage" alt="LinkedIn logo" />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/Marcelino-G" target="_blank">
            <img :src="githubImage" alt="GitHub logo" />
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a href="mailto:marcelino.gamino11@gmail.com">
            <img :src="envelopeImage" alt="Envelope logo" />
            <p>Email</p>
          </a>
        </li>
      </ul>
      <ul id="materiaIcons">
        <li>
          <img :src="greenMateria" alt="Green Materia circle" />
        </li>
        <li>
          <img :src="blueMateria" alt="Blue Materia circle" />
        </li>
        <li>
          <img :src="purpleMateria" alt="Purple Materia circle" />
        </li>
        <div id="materiaBackground"></div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
  text-align: center;
}

a {
  text-decoration: none;
  color: #f8f8ff;
}

#footerContainer {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

#rightsContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 5px;
}

#rightsContainer button {
  margin-top: 5px;
  cursor: pointer;
}

#iconContainer {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
  width: 50%;
  height: 100%;
}

#professionalIcons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
}

#professionalIcons li {
  margin: 0 20px 0 0;
}

#professionalIcons li:last-child {
  margin: 0;
}

#professionalIcons li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#professionalIcons li a p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#professionalIcons li a img {
  width: 20px;
  height: 20px;
}

#materiaIcons {
  display: flex;
  position: relative;
  height: 15%;
  justify-content: center;
  align-items: center;
}

#materiaIcons li {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

#materiaIcons li img {
  width: 35%;
}

#materiaBackground {
  position: absolute;
  background: #9c98a2;
  height: 20%;
  width: 60%;
}

@media only screen and (max-width: 992px) {
  p {
    font-size: 0.65em;
  }
}

@media only screen and (min-width: 992px) {
  p {
    font-size: 0.75em;
  }
}
</style>
