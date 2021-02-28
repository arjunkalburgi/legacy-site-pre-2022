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
:root {
  --brand-colour: #12a962;
  --brand-colourlight: #12a962;
  --brand-colourdark: #005d31;

  --brand-contrastlight: #efefef;
  --brand-contrastdark: #081a11;

  --brand-textcolour: --brand-contrastdark;

  --neue-bg-colours: #e2cdd6, #dccee4, #cedee4, #cce4de;
  --neue-dark-bg-colours: #2e0b18, #230d30, #0e2c33, #081a11;

  --brand-text: normal 18px/1.3 "Lato";
  --bold-text: normal 700 30px/1.3 "Raleway";
  --button-text: normal 15px "Raleway";
  --icon-text: normal 20px/1.3 "Lato";
}

// #region BACKGROUND EFFECT
body {
	background: linear-gradient(-45deg, var(--neue-bg-colours));
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
// #endregion BACKGROUND EFFECT

// #region FONTS
@font-face {
  font-family: "Lato";
  src: url("./assets/fonts/Lato-Regular.ttf");
}

@font-face {
  font-family: "Raleway";
  src: url("./assets/fonts/Raleway-Bold.ttf");
}

#app {
  font: var(--brand-text);
  color: var(--brand-textcolour);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*[class$="title"] {
  font: var(--bold-text);
}
// #endregion FONTS

// #region SPACING
.section {
  width: 70%;
  margin: 25vh auto 15vh;
  @media screen and (max-width: 80em) {
    width: 85%;
  }
}
// #endregion SPACING

// #region DARK MODE
@media (prefers-color-scheme: dark) {
  :root {
    --brand-colour: var(--brand-colourdark);
    --brand-textcolour: var(--brand-contrastlight);
    --neue-bg-colours: var(--neue-dark-bg-colours);
  }
  .contact {
    background: transparent !important;
  }
}
// #endregion DARK MODE
</style>
