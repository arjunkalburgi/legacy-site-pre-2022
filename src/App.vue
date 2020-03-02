<template>
  <div id="app">
    <Hero />
    <Intro />
    <Portfolio />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hero,
    Intro,
    Portfolio,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

.section {
  width: 70%;
  margin: 25vh auto 15vh;
}

  .portfolio_item--title,
  .text.big,
  .contact_contents--title {
    font-family: 'raleway';
    font-weight: 700;
    font-size: 30px;
  }

  .image-container {
    box-shadow: -20px 26px 54px rgba(51, 51, 51, 0.28);
    z-index: -1;
    background-size: cover;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: none;
    margin-top: 200px;
  }

</style>
