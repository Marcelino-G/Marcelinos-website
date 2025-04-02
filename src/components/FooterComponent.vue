<script setup>
import linkedInImage from '@/assets/linkImgs/linkedIn.jpg';
import githubImage from '@/assets/linkImgs/github.jpg';
import resumeImage from '@/assets/linkImgs/file-earmark-person.jpg';
import envelopeImage from '@/assets/linkImgs/envelope.jpg'
</script>

<template>
  <div id="footerContainer">
    <p>copyright</p>
    <ul>
      <li>
        <a href="../">
          <img :src="envelopeImage" >
          <p>Email</p>
        </a>
      </li>
      <li>
        <a href="../">
          <img :src="resumeImage" >
          <p>Resume</p>
        </a>
      </li>
      <li>
        <a href="../">
          <img :src="githubImage" >
          <p>GitHub</p>
        </a>
      </li>
      <li>
        <a href="../">
          <img :src="linkedInImage" >
          <p>LinkedIn</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

#footerContainer{
  height: 100%;
  display: flex;
  justify-content: space-between;
}

ul{
  background-color: yellow;
  height: 100%;
  width: 15%; 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5%;
  
}

li{
  background-color: pink;
  display: flex;
  flex-direction: column;
  text-align: center;
}

img{
  width: 60%;
  height: 60%;
}

</style>
