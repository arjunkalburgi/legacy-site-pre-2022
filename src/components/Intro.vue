<template lang="html">

  <section class="intro section" id="intro">
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
		
		<div class="item image big"></div>
		<h2 class="item text big">Products work like magic when everyone is focused on the people it’s for.</h2>
		<p class="item text firstpara">
			I love developing websites and apps
			<br>that deliver magical experiences
			<br>by providing real value.
		</p>
		<p class="item text secondpara">
			First I learn everything I can about
			<br>who and what I need to build so that
			<br>I find the problems that need to be solved.
		</p>
		<div class="item abid-image small">
			<div class="color-bg intro_image--box small-3"></div>
			<div class="image-container intro_image--box small-3" style="position: relative; left: 40px; top: -20px;">
				<div class="b-lazy image abid"></div>
			</div>
		</div>
		<div class="item red-image small">
			<div class="color-bg intro_image--box small-3"></div>
			<div class="image-container intro_image--box small-3" style="left: 30px; top: -30px;">
				<div class="b-lazy image red"></div>
			</div>
		</div>
		<p class="item text thirdpara">
			I’ll then iterate on possible designs,
			<br>theorizing what could solve the problem
			<br>and testing to see what does.
		</p>
		<div class="item sra-image small">
			<div class="color-bg intro_image--box small-3"></div>
			<div class="image-container intro_image--box small-3" style="left: 40px; top: -32px;">
				<div class="b-lazy image sra"></div>
			</div>
		</div>
		<p class="item text fourthpara">
			And finally, I’ll develop the solution in code
			<br>so that I can deploy it to real people
			<br>and create a real impact.
		</p>
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
  .bgicons {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      overflow: hidden;
      pointer-events: none
  }

  .bgicon {
      position: absolute;
      pointer-events: none;
      z-index: -1;
      width: 35px;
      height: 35px;
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0.5;
  }

  .bgicon1 { background-image: url('../assets/elements/element01.svg') }
  .bgicon2 { background-image: url('../assets/elements/element02.svg') }
  .bgicon3 { background-image: url('../assets/elements/element03.svg') }
  .bgicon4 { background-image: url('../assets/elements/element04.svg'); }
  .bgicon5 { background-image: url('../assets/elements/element05.svg'); }
  .bgicon6 { background-image: url('../assets/elements/element06.svg') }
  .bgicon7 { background-image: url('../assets/elements/element07.svg') }
  .bgicon8 { background-image: url('../assets/elements/element08.svg') }

  .intro {
      position: relative;
      padding: 100px 0 0;
      display: grid;
      grid-template-columns: 50% 50px auto;
      grid-template-rows: 230px 200px 7.5rem 7.5rem 15rem 7.5rem 15rem;
  }

  .item.image.big {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
      background-size: cover;
      background-image: url("https://www.arjunkalburgi.com/website_assets/pics/innovation.jpg");
  }

  .item.text.big {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
      width: 80%;
  }

  @media screen and (min-width: 40em) {
      .item.text:not(.big) {
          padding: 10%
      }

      .item.text.thirdpara {
          padding: 0 10%;
      }
  }

  .item.text.firstpara {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
  }

  .item.text.secondpara {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 5;
  }

  .item.abid-image.small {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 4;
      grid-row-end: 6;
  }

  .item.red-image.small {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 5;
      grid-row-end: 6;
  }

  .item.sra-image.small {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 7;
      grid-row-end: 8;
      justify-self: center;
      margin-top: 10vh;
  }

  .item.text.thirdpara {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 6;
  }

  .item.text.fourthpara {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 7;
      grid-row-end: 8;
  }



  .image {
      background: linear-gradient(135deg, #dedede 0%, #dedede 40%, #bfbfbf 100%);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 100%;
      border-radius: 3px;
  }

  .intro_image--box {
      width: 250px;
      height: 250px;
      border-radius: 3px;
      position: relative;
  }

  .color-bg {
      background: #12A962;
      float: left;
      z-index: -1;
      margin-top: 200px;
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

  .image.abid { background-image: url("../assets/pics/abid.jpg"); }
  .image.red { background-image: url("../assets/pics/red.jpg"); }
  .image.sra { background-image: url("../assets/pics/sra.jpg"); }
  .image.slack { background-image: url("../assets/pics/slack.jpeg") }
  .image.style { background-image: url("../assets/pics/style.jpg") }
  .image.surf { background-image: url("../assets/pics/surf.jpg"); filter: grayscale(0.6); }
  .image.tasks { background-image: url("../assets/pics/tasks.jpg"); filter: grayscale(0.6); }

</style>
