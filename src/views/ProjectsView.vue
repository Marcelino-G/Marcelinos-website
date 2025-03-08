<script setup>
import TopicHeader from "@/components/header/TopicHeader.vue";
import NavHeader from "@/components/header/NavHeader.vue";
import SupportingContentHeader from "@/components/header/SupportingContentHeader.vue";
import TopicMain from "@/components/main/TopicMain.vue";
import ContentMain from "@/components/main/ContentMain.vue";
import SupportingContentMain from "@/components/main/SupportingContentMain.vue";

</script>

<template>
  <div id="homeContainer">
    <header>
      <topic-header id="topic-header" />
      <nav-header id="nav-header" />
      <supporting-content-header id="supporting-content-header" :supportingContent="supportingContentHeader" />
    </header>

    <main>
      <topic-main id="topic-main" />
      <content-main id="content-main" />
      <supporting-content-main id="supporting-content-main" />
    </main>

    <footer>copyright</footer>
  </div>
</template>

<style scoped>

#homeContainer{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 95% auto;
  grid-template-areas:
    "header main"
    "footer footer"; 
}

header {
  background-color: black;
  grid-area: header;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 90% 10%;
  grid-template-areas:
    "topic-header topic-header"
    "nav-header supporting-content-header";
}

#topic-header {
  grid-area: topic-header;
  background-color: beige;
}

#nav-header {
  background-color: orange;
  grid-area: nav-header;
}

#supporting-content-header {
  grid-area: supporting-content-header;
  background-color: brown;
}

main {
  background-color: black;
  grid-area: main;
  display: grid;
  grid-template-rows: 15% 75% 10%;
  grid-template-areas:
    "topic-main"
    "content-main"
    "supporting-content-main";
}

#topic-main {
  background-color: red;
  grid-area: topic-main;
}

#content-main {
  background-color: gold;
  grid-area: content-main;
}

#supporting-content-main {
  background-color: aqua;
  grid-area: supporting-content-main;
}

footer {
  background-color: grey;
  grid-area: footer;
}
</style>
