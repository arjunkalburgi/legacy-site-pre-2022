<template lang="html">
  <section class="hero section">
    <LogoImage class="hero_nameImg" />
    <p class="hero_text--tag">
      learning, finding, designing, developing
    </p>
    <p class="hero_text--intro">
      Hey fam! My name is Arjun and I'm a PM after years of being a UX Developer. 
      I'm currently building a new site, that represents me a little better:
    </p>

    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        I think my personal site doesn&#39;t need to be for a professional audience 
        anymore. I want it to be for potential friends, mentors, mentees, neighbors, 
        etc; anyone that wants an introduction to me.
      </p>
      &mdash; Arj (@arjunkalburgi) 
      <a href="https://twitter.com/arjunkalburgi/status/1475333986071293953?ref_src=twsrc%5Etfw">December 27, 2021</a>
    </blockquote>

    <p class="hero_text--outro">
      Below is the site as it existed 😃
    </p>
    <ButtonList :hasButton="true" v-bind:button="button" v-bind:list="list" />
  </section>
</template>

<script setup lang="js">

  import LogoImage from './../system/LogoImage.vue'
  import ButtonList from './../system/ButtonList.vue'
  var TwitterWidgetsLoader = require('twitter-widgets');

  export default  {
    name: 'hero',
    components: {
      LogoImage,
      ButtonList
    },
    props: [],
    mounted () {
      TwitterWidgetsLoader.load();
    },
    data () {
      return {
        button: {link: "writing", text: "writing", alt: "View my blog" },
        list: [
          {link: "https://twitter.com/arjunkalburgi",     icon: "twitter",  alt: "View my Twitter" },
          {link: "https://github.com/arjunkalburgi",      icon: "github",   alt: "View my GitHub" },
          {link: "https://linkedin.com/in/arjunkalburgi", icon: "linkedin", alt: "View my Linked In" },
          {link: "mailto:askalburgi@gmail.com",           icon: "email",    alt: "Send me an Email" },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.hero {
  > * {
    width: 50%;
    @media screen and (max-width: 40em) {
      width: unset;
    }

    &[class$="--outro"] {
      margin-bottom: 3rem;
    }
  }

  &_nameImg {
    width: 200px;
  }

  &_text--tag {
    margin-top: 7px;
    margin-bottom: 30px;
  }
}
</style>
