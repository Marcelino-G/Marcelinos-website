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
          <a href="https://www.linkedin.com/in/marcelino-gamino/" target="_blank">
            <img :src="linkedInImage" />
            <p>LinkedIn</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/Marcelino-G" target="_blank">
            <img :src="githubImage" />
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a href="mailto:marcelino.gamino11@gmail.com">
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
          <img :src="blueMateria" />
        </li>
        <li>
          <img :src="purpleMateria" />
        </li>
        <div id="iconBackground"></div>
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
  /* background: green; */
}

#footerContainer > p {
  align-self: flex-end;
  padding-left: 5px;
  /* background: purple; */
}

/* p{
  font-size: .75em;
} */

#iconContainer {
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: column;
  width: 50%;
  /* flex-grow: 1; */
  height: 100%;
 
}

#icons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  /* height: 70%; */


}

#icons li {
  margin: 0 20px 0 0;
  /* padding: 5px; */
  /* height: 20%; */
  /* width: 5%; */
  /* background: grey; */
  /* flex-grow: 1; */
  
}

#icons li:last-child {
  margin: 0;
}

#icons li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 5px; */
  /* width: 100%;
  height: 100%; */
}

#icons li a p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 5px; */
  /* width: 100%;
  height: 100%; */
}

#icons li a img {
  /* max-width: 55%;
  max-height: 55%; */
  /* width: 50%;
  height: 50%; */
  /* flex-grow: 1; */
  /* width: 100%; */
  width: 25px;
  height: 25px
}

/* #icons li a p {
  font-size: .75em;
} */



#materia {
  display: flex;
  position: relative;
  height: 15%;
  justify-content: center;
  align-items: center;

}

#materia li {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

#materia li img {
  width: 35%;
}



li {
  list-style: none;
  text-align: center;
  
}

a {
  text-decoration: none;
  color: #f8f8ff;
}

#iconBackground {
  position: absolute;
  background: #9c98a2;
  height: 20%;
  width: 60%;
  /* right: 3.5%; */
}

@media only screen and (max-width: 992px) {

  p{
  font-size: .65em;
}



}

@media only screen and (min-width: 992px) {

  p{
  font-size: .75em;
}



}

/* @media only screen and (max-width: 410px) {

#icons li a img {

  width: 18px;
  height: 18px
}




} */

/* @media only screen and (min-width: 992px) {

  #materia li img {
  width: 25%;
}

#icons li a img {
  width: 16px;
  height: 16px
}



} */
</style>
