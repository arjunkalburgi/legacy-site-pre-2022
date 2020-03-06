<template lang="html">

  <section class="intro section" id="intro">
    <BackgroundAnimation class="intro_bgani" :total='number_of_leaves' />

    <div class="intro_item--image big mobile"></div>
    <h2 class="intro_item text big">Products work like magic when everyone is focused on the people it’s for.</h2>
    <p class="intro_item text firstpara">
      I love developing websites and apps
      <br>that deliver magical experiences
      <br>by providing real value.
    </p>
    <p class="intro_item text secondpara">
      First I learn everything I can about
      <br>who and what I need to build so that
      <br>I find the problems that need to be solved.
    </p>
    <FloatingImage image="abid" class="intro_item--image small abid-image" />
    <div class="intro_item--image mobile abid-image FloatingImage_box">
      <div class="b-lazy image abid"></div>
    </div>
    <FloatingImage image="red" class="intro_item--image small red-image" />
    <p class="intro_item text thirdpara">
      I’ll then iterate on possible designs,
      <br>theorizing what could solve the problem
      <br>and testing to see what does.
    </p>
    <FloatingImage image="sra" class="intro_item--image small sra-image" />
    <p class="intro_item text fourthpara">
      And finally, I’ll develop the solution in code
      <br>so that I can deploy it to real people
      <br>and create a real impact.
    </p>
  </section>

</template>

<script lang="js">

  import FloatingImage from './../system/FloatingImage.vue'
  import BackgroundAnimation from './../system/BackgroundAnimation.vue'

  export default  {
    name: 'intro',
    components: {
      FloatingImage,
      BackgroundAnimation
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        number_of_leaves: 40
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .intro {
      position: relative;
      padding: 100px 0 0;
      display: grid;
      grid-template-columns: 50% 50px auto;
      grid-template-rows: 230px 200px 7.5rem 7.5rem 15rem 7.5rem 15rem;
      @media screen and (max-width: 40em) {
        padding: 100px 7.5% 0px;
        display: block;
      }

      &_bgani {
        @media screen and (min-width: 40em) {
          left: -15vw;
          bottom: -10vw;
          right: -15vw;
        }
      }

      &_item.text {
        &.big {
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 2;
          width: 80%;
          @media screen and (max-width: 40em) { width: 100%; }
        }

        &:not(.big) {
          @media screen and (min-width: 40em) { padding: 10%; }
        }

        &.firstpara {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        
        &.secondpara {
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 3;
          grid-row-end: 5;
        }

        &.thirdpara {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 6;

          @media screen and (min-width: 40em) { padding: 0 10%; }
        }

        &.fourthpara {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 7;
          grid-row-end: 8;
        }
      }

      &_item--image {
        &.big {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 3;
          background-size: cover;
          background-image: url("../../assets/pics/innovation.jpg");
          background-position-y: center !important;
        }

        &.small {
          @media screen and (max-width: 40em) { display: none; }
          
          &.abid-image {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 4;
            grid-row-end: 6;
            margin-left: 5%;

          }

          &.red-image {
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 5;
            grid-row-end: 6;
            margin-left: 10%;
          }

          &.sra-image {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 7;
            grid-row-end: 8;
            justify-self: center;
            margin-top: 10vh;
            margin-left: 20%;
          }
        }

        &.mobile {
          display: none;

          width: 90%;
          max-height: 200px;
          height: 200px;
          background-position-y: top;
          @media screen and (max-width: 40em) { display: block; }
        }
      }
  }
</style>
