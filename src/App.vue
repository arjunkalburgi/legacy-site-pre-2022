<template>
  <div id="app">
    <Hero />
    <Intro />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import Hero from './components/Hero.vue'
import Intro from './components/Intro.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hero,
    Intro,
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

</style>
