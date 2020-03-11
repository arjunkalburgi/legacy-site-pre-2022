<template lang="html">

  <section class="hero section">
		<img class="hero_nameImg b-lazy" src="../../assets/pics/BlackFull.svg" title="Arjun Kalburgi" />
		<p class="hero_text--tag">learning, finding, designing, developing impact</p>
		<p class="hero_text--intro"> I am a developer and designer but I don't care much for titles or roles. Instead I like to learn as much as I can because I believe that every random thing I learn will somehow help me make an impact in this world. I'm currently based out of Toronto, where I take every chance I get to explore culture and build something new.</p>
    <ButtonList :hasButton=true v-bind:button='button' v-bind:list='list' />
  </section>

</template>

<script lang="js">

  import ButtonList from './../system/ButtonList.vue'

  export default  {
    name: 'hero',
    components: {
      ButtonList
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        button: {link: "writing", text: "writing"},
        list: [
          {link: "https://twitter.com/arjunkalburgi",     icon: "twitter"},
          {link: "https://github.com/arjunkalburgi",      icon: "github"},
          {link: "https://linkedin.com/in/arjunkalburgi", icon: "linkedin"},
          {link: "https://codepen.io/arjunkalburgi",      icon: "codepen"},
          {link: "mailto:askalburgi@gmail.com",           icon: "email"},
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
      @media screen and (max-width: 40em) { width: unset; }
    }

    &_nameImg { width: 200px; }

    &_text--tag {
      margin-top: 7px;
      margin-bottom: 30px;
    }
  }
</style>
