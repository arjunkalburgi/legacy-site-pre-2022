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
			
			<ul class="contact_contents--links">
				<li>
					<a href="writing"><span class="far fa-edit light"></span></a>
				</li>
				<li>
					<a href="https://twitter.com/arjunkalburgi"><span class="fab fa-twitter light"></span></a>
				</li>
				<li>
					<a href="https://github.com/arjunkalburgi"><span class="fab fa-github light"></span></a>
				</li>
				<li>
					<a href="https://linkedin.com/in/arjunkalburgi"><span class="fab fa-linkedin light"></span></a>
				</li>
				<li>
					<a href="https://codepen.io/arjunkalburgi/"><span class="fab fa-codepen light"></span></a>
				</li>
				<li>
					<a href="mailto:me@arjunkalburgi.com"><span class="far fa-envelope light"></span></a>
				</li>
			</ul>
		</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'footer',
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

  .contact_contents--links li:not(:first-of-type) {
    margin: 0 0 0 35px;
  }

  .contact_contents--links {
    position: absolute;
    padding-left: 0px;
  }

  .contact_contents--links li {
    float: left;
    list-style: none
  }

</style>
