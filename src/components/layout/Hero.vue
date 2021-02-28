<template lang="html">
  <section class="hero section">
    <LogoImage class="hero_nameImg" />
    <p class="hero_text--tag">
      learning, finding, designing, developing
    </p>
    <p class="hero_text--intro">
      Hey fam! My name is Arjun and I'm a UX Developer, meaning I pair my 
      building skills with my creativity to tryna get that magic ✨. I've ended 
      up in a whole bunch of different roles and situations, learning all kinds 
      of random things. Right now I'm in Toronto, doing my best to explore, enjoy and build.
    </p>
    <ButtonList :hasButton="true" v-bind:button="button" v-bind:list="list" />
  </section>
</template>

<script lang="js">

  import LogoImage from './../system/LogoImage.vue'
  import ButtonList from './../system/ButtonList.vue'

  export default  {
    name: 'hero',
    components: {
      LogoImage,
      ButtonList
    },
    props: [],
    mounted () {

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
