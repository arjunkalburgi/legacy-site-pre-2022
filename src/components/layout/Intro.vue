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
    <FloatingImage image="abid" class="item abid-image small" />
    <FloatingImage image="red" class="item red-image small" />
    <p class="item text thirdpara">
      I’ll then iterate on possible designs,
      <br>theorizing what could solve the problem
      <br>and testing to see what does.
    </p>
    <FloatingImage image="sra" class="item sra-image small" />
    <p class="item text fourthpara">
      And finally, I’ll develop the solution in code
      <br>so that I can deploy it to real people
      <br>and create a real impact.
    </p>
  </section>

</template>

<script lang="js">

  import FloatingImage from './../system/FloatingImage.vue'

  export default  {
    name: 'intro',
    components: {
      FloatingImage
    },
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

  .bgicon1 { background-image: url('../../assets/elements/element01.svg') }
  .bgicon2 { background-image: url('../../assets/elements/element02.svg') }
  .bgicon3 { background-image: url('../../assets/elements/element03.svg') }
  .bgicon4 { background-image: url('../../assets/elements/element04.svg'); }
  .bgicon5 { background-image: url('../../assets/elements/element05.svg'); }
  .bgicon6 { background-image: url('../../assets/elements/element06.svg') }
  .bgicon7 { background-image: url('../../assets/elements/element07.svg') }
  .bgicon8 { background-image: url('../../assets/elements/element08.svg') }

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
</style>
