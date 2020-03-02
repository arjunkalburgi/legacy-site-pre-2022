<template>
  <div id="app">
    <Hero />
    <Intro />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>

import Hero from './components/layout/Hero.vue'
import Intro from './components/layout/Intro.vue'
import Portfolio from './components/layout/Portfolio.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Intro,
    Portfolio,
    Footer,
  }
}
</script>

<style>

  :root {
    --brand-colour: #12A962;
    --brand-contrastlight: white;
    --brand-contrastdark: black;

    --button-text: normal 700 15px 'Raleway';
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
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
