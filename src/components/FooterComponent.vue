<script setup>
import linkedInImage from "@/assets/icons/linkedin.png";
import githubImage from "@/assets/icons/github.png";
import resumeImage from "@/assets/icons/file.png";
import envelopeImage from "@/assets/icons/envelope.png";
import greenMateria from "@/assets/icons/circle-green.png";
import blueMateria from "@/assets/icons/circle-blue.png";
import purpleMateria from "@/assets/icons/circle-purple.png";
</script>

<template>
  <div id="footerContainer">
    <p>Copyright © 2025 Marcelino Gamino. All Rights Reserved.</p>
    <div id="iconContainer">
      <ul id="icons">
        <li>
          <a href="../">
            <img :src="linkedInImage" />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="../">
            <img :src="githubImage" />
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a href="../">
            <img :src="resumeImage" />
            <p>Resume</p>
          </a>
        </li>
        <li>
          <a href="../">
            <img :src="envelopeImage" />
            <p>Email</p>
          </a>
        </li>
      </ul>
      <ul id="materia">
        <li>
          <img :src="greenMateria" />
        </li>
        <li>
          <img :src="greenMateria" />
        </li>
        <li>
          <img :src="blueMateria" />
        </li>
        <li>
          <img :src="purpleMateria" />
        </li>
        <div id="background"></div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#footerContainer {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

p {
  align-self: flex-end;
}

#iconContainer {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 45%;
  height: 100%;
}

#icons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70%;
}

#icons li {
  margin: 0 15px 0 0;
  height: 85%;
  width: 10%;
}

#icons li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

#icons li a img {
  width: 50%;
  height: 75%;
}

#icons li a p {
  align-self: initial;
  font-size: .75em;
}



#materia {
  display: flex;
  position: relative;
  height: 30%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px 0 0;
}

#materia li {
  z-index: 2;
  /* background: grey; */
}

#materia li img {
  width: 40%;
}



li {
  list-style: none;
  text-align: center;
  
}

a {
  text-decoration: none;
  color: #f8f8ff;
}

#background {
  position: absolute;
  background: #9c98a2;
  height: 20%;
  width: 13%;
  right: 3.5%;
}
</style>
