<template>
  <div id="app">
    <Hero />
    <Intro />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import Hero from "./components/layout/Hero.vue";
import Intro from "./components/layout/Intro.vue";
import Portfolio from "./components/layout/Portfolio.vue";
import Contact from "./components/layout/Contact.vue";

export default {
  name: "App",
  components: {
    Hero,
    Intro,
    Portfolio,
    Contact,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Lato";
  src: url("./assets/fonts/Lato-Regular.ttf");
}

@font-face {
  font-family: "Raleway";
  src: url("./assets/fonts/Raleway-Bold.ttf");
}

:root {
  --brand-colour: #12a962;
  --brand-colourlight: #12a962;
  --brand-colourdark: #005d31;

  --brand-contrastlight: #efefef;
  --brand-contrastdark: #081a11;

  --brand-textcolour: --brand-contrastdark;

  --brand-text: normal 18px/1.3 "Lato";
  --bold-text: normal 700 30px/1.3 "Raleway";
  --button-text: normal 15px "Raleway";
  --icon-text: normal 20px/1.3 "Lato";
}

// FONTS
#app {
  font: var(--brand-text);
  color: var(--brand-textcolour);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*[class$="title"] {
  font: var(--bold-text);
}

// SPACING
.section {
  width: 70%;
  margin: 25vh auto 15vh;
  @media screen and (max-width: 80em) {
    width: 85%;
  }
}

// DARK MODE
@media (prefers-color-scheme: dark) {
  :root {
    --brand-colour: var(--brand-colourdark);
    --brand-textcolour: var(--brand-contrastlight);
  }
  body,
  .contact {
    background: var(--brand-contrastdark) !important;
  }
}
</style>
