<script setup>
import linkedInImage from '@/assets/icons/linkedin.png';
import githubImage from '@/assets/icons/github.png';
import resumeImage from '@/assets/icons/file.png';
import envelopeImage from '@/assets/icons/envelope.png'
import greenMateria from '@/assets/icons/circle-green.png'
import blueMateria from '@/assets/icons/circle-blue.png'
import purpleMateria from '@/assets/icons/circle-purple.png'
</script>

<template>
  <div id="footerContainer">
    <p>Copyright © 2025 Marcelino Gamino. All Rights Reserved.</p>
    <ul>
      <li>
        <a href="../">
          <img :src="linkedInImage" >
          <p>LinkedIn</p>
        </a>
        <img :src="greenMateria"/>
      </li>
      <li>
        <a href="../">
          <img :src="githubImage" >
          <p>GitHub</p>
        </a>
        <img :src="greenMateria"/>
      </li>
      <li>
        <a href="../">
          <img :src="resumeImage" >
          <p>Resume</p>
        </a>
        <img :src="blueMateria"/>
      </li>
      <li>
        <a href="../">
          <img :src="envelopeImage" >
          <p>Email</p>
        </a>
        <img :src="purpleMateria"/>
      </li>
      <div id="background"></div>
    </ul>
  </div>
</template>

<style scoped>

#footerContainer{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

ul{
  /* background-color: yellow; */
  height: 100%;
  width: 15%; 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5%;
  position: relative;
  
}

li{
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  /* height: 100%; */
  z-index: 2;
}

a{
  text-decoration: none;
  color: #F8F8FF;
}

img{
  width: 45%;
  height: 45%;
}

ul > li >  img{
  border: #9C98A2 3px solid;
  border-radius: 50%;
  margin: 0 auto;
}

#background{
  position: absolute;
  background: #9C98A2;
  height: 15%;
  width: 85%;
  top: 85%;
  /* z-index: 1; */

}

</style>
