<template lang="html">

  <section class="intro hero section">
		<img class="hero_nameImg b-lazy" src="https://cdn.jsdelivr.net/gh/askalburgi/styleguide@fcd922db42282219a7ba68996c404f41578c8416/Logo/Main/BlackFull.svg" title="Arjun Kalburgi" />
		<p class="hero_text--tag">learning, finding, designing, developing impact</p>
		<p class="hero_text--intro"> I am a developer and designer but I don't care much for titles or roles. Instead I like to learn as much as I can because I believe that every random thing I learn will somehow help me make an impact in this world. I'm currently based out of Toronto, where I take every chance I get to explore culture and build something new.</p>
		<ul class="hero_Links">
			<li>
				<a class="hero_button" href="writing" title="Blog">WRITING</a>
			</li>
			<li>
				<a href="https://twitter.com/arjunkalburgi"><span class="fab fa-twitter"></span></a>
			</li>
			<li>
				<a href="https://github.com/arjunkalburgi"><span class="fab fa-github"></span></a>
			</li>
			<li>
				<a href="https://linkedin.com/in/arjunkalburgi"><span class="fab fa-linkedin"></span></a>
			</li>
			<li>
				<a href="https://codepen.io/arjunkalburgi/"><span class="fab fa-codepen"></span></a>
			</li>
			<li>
				<a href="mailto:me@arjunkalburgi.com"><span class="far fa-envelope"></span></a>
			</li>
		</ul>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'intro',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .section {
    width: 70%;
    margin: 25vh auto 15vh;
    text-align: left;
  }

  .hero {
    > * {
      width: 50%;
    }

    &_nameImg { width: 200px; }

    &_text--tag {
      margin-top: 7px;
      margin-bottom: 30px;
    }

    &_Links {
      position: absolute;
      padding-left: 0px;
    
      li {
        float: left;
        list-style: none
      }
      li:not(:first-of-type) { margin: 0 0 0 15px; }
    }

    &_button {
      background: #12A962;
      color: #fff;
      font-family: 'Raleway';
      text-transform: uppercase;
      font-size: 15px;
      letter-spacing: 1.2px;
      font-weight: 700;
      line-height: 17px;
      padding: 1rem 2rem;
      position: relative;
      margin: 20px 0;
      border-radius: 3px;
      text-decoration: none;
    }
  }
</style>
