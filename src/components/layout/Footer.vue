<template lang="html">

  <section class="contact contact-style b-loaded" id="contact">
		<div class="bgicons b-lazy">
			<div class="bgicon bgicon1 b-lazy"></div>
			<div class="bgicon bgicon2 b-lazy"></div>
			<div class="bgicon bgicon3 b-lazy"></div>
			<div class="bgicon bgicon4 b-lazy"></div>
			<div class="bgicon bgicon5 b-lazy"></div>
			<div class="bgicon bgicon6 b-lazy"></div>
			<div class="bgicon bgicon7 b-lazy"></div>
			<div class="bgicon bgicon8 b-lazy"></div>
			<div class="bgicon bgicon1 b-lazy"></div>
			<div class="bgicon bgicon2 b-lazy"></div>
			<div class="bgicon bgicon3 b-lazy"></div>
			<div class="bgicon bgicon4 b-lazy"></div>
			<div class="bgicon bgicon5 b-lazy"></div>
			<div class="bgicon bgicon6 b-lazy"></div>
			<div class="bgicon bgicon7 b-lazy"></div>
			<div class="bgicon bgicon8 b-lazy"></div>
			<div class="bgicon bgicon1 b-lazy"></div>
			<div class="bgicon bgicon2 b-lazy"></div>
			<div class="bgicon bgicon3 b-lazy"></div>
			<div class="bgicon bgicon4 b-lazy"></div>
			<div class="bgicon bgicon5 b-lazy"></div>
			<div class="bgicon bgicon6 b-lazy"></div>
			<div class="bgicon bgicon7 b-lazy"></div>
			<div class="bgicon bgicon8 b-lazy"></div>
		</div>

		<div class="contact_contents">
			<h2 class="contact_contents--title">More</h2>
      <ButtonList class="contact_contents--links" :hasButton=false v-bind:list='list' />
		</div>
  </section>

</template>

<script lang="js">
  import ButtonList from './../system/ButtonList.vue'

  export default  {
    name: 'footer',
    components: {
      ButtonList
    },
    props: [],
    mounted () {

    },
    data () {
    return {
        list: [
          {link: "arjunkalburgi.com/writing",     icon: "edit"},
          {link: "twitter.com/arjunkalburgi",     icon: "twitter"},
          {link: "github.com/arjunkalburgi",      icon: "github"},
          {link: "linkedin.com/in/arjunkalburgi", icon: "linkedin"},
          {link: "codepen.io/arjunkalburgi",      icon: "codepen"},
          {link: "mailto:me@arjunkalburgi.com",   icon: "envelope"},
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
  .contact {
    z-index: 1;
    text-align: center;
    width: 100%;
    position: relative;
    bottom: 0;
    background: linear-gradient(white, #259f66 0%);
    background-size: cover;
    margin: 0;
    min-height: 400px;
  }

  .contact_contents {
    padding: 10vh 0;
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-row-gap: 2.5vh;
  }

  .contact_contents--title {
    color: #ffffff;
    margin: 20px 0 0 0;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .contact_contents--links {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;
    position: relative;
    margin: auto;
  }
</style>
