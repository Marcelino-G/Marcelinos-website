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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p{
  align-self: flex-end;

}

#iconContainer {
  display: flex;
  flex-direction: column;
}

ul {

  display: flex;

  justify-content: space-between;
  gap: 15px;
}

#materia {
  position: relative;
  display: flex;
  justify-content: center;
}



#materia li img {
  width: 35%;
  padding-top: 5px;

}

#materia li  {
  z-index: 2;

}

li {
  list-style: none;
  text-align: center;
  width: 60px;
}

a {
  text-decoration: none;
  color: #f8f8ff;
}

#background {
  position: absolute;
  background: #9c98a2;
  height: 20%;
  width: 85%;
  top: 40%;
}
</style>
