<template lang="html">

  <section class="intro section" id="intro">
    <BackgroundAnimation class="intro_bgani" :total='number_of_leaves' />

    <theImage class="intro_image intro_image--innovation mobile" :path="innovationimage.path" :alttext="innovationimage.alttext" />
    <h2 class="intro_text intro_text--title">Products work like magic when everyone is focused on the people it’s for.</h2>
    <p class="intro_text intro_text--firstpara">
      I love developing websites and apps
      <br>that deliver magical experiences
      <br>by providing real value.
    </p>
    <p class="intro_text intro_text--secondpara">
      First I learn everything I can about
      <br>who and what I need to build so that
      <br>I find the problems that need to be solved.
    </p>
    <FloatingImage class="intro_image intro_image--abid" :image="abidimage.path" :alttext="abidimage.alttext" />
    <theImage class="intro_image mobile mobile-only" :path="abidimage.path" :alttext="abidimage.alttext" />
    <FloatingImage class="intro_image intro_image--red" :image="redimage.path" :alttext="redimage.alttext" />
    <p class="intro_text intro_text--thirdpara">
      I’ll then iterate on possible designs,
      <br>theorizing what could solve the problem
      <br>and testing to see what does.
    </p>
    <FloatingImage class="intro_image intro_image--sra" :image="sraimage.path" :alttext="sraimage.alttext" />
    <p class="intro_text intro_text--fourthpara">
      And finally, I’ll develop the solution in code
      <br>so that I can deploy it to real people
      <br>and create a real impact.
    </p>
  </section>

</template>

<script lang="js">

  import theImage from './../system/Image.vue'
  import FloatingImage from './../system/FloatingImage.vue'
  import BackgroundAnimation from './../system/BackgroundAnimation.vue'

  export default  {
    name: 'intro',
    components: {
      theImage,
      FloatingImage,
      BackgroundAnimation
    },
    props: [],
    mounted () { },
    data () { return { 
      number_of_leaves: 40,
      innovationimage: {
        path: "innovation.jpg",
        alttext: "When you combine Domain Knowledge, Tech and Design, you get to the Users. That's the receipe for Innovation."
      },
      abidimage: {
        path: "abid.jpg",
        alttext: "Interviews and in-person 1 on 1s gather unique and invaluable insights, these softskills help start great products."
      },
      sraimage: {
        path: "sra.jpg",
        alttext: "Remaining happy and optimistic helps battle stress of deadlines, these softskills help glue together great teams."
      },
      redimage: {
        path: "red.jpg",
        alttext: "Discussion, presentation and collaboration are grease for the engine, these softskills unlock great work."
      },
    } },
    methods: { },
    computed: { }
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

      &_text {
        &--title {
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 1;
          grid-row-end: 2;
          width: 80%;
          z-index: 0;
          @media screen and (max-width: 40em) { width: 100%; }
        }

        &:not(.item_text--title) { @media screen and (min-width: 40em) { padding: 10%; } }

        &--firstpara {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        
        &--secondpara {
          grid-column-start: 2;
          grid-column-end: 4;
          grid-row-start: 3;
          grid-row-end: 5;
        }

        &--thirdpara {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 6;

          @media screen and (min-width: 40em) { padding: 0 10%; }
        }

        &--fourthpara {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 7;
          grid-row-end: 8;
        }
      }

      &_image {
        &--innovation {
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 3;
          width: 100%;
        }

        &--abid {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 4;
          grid-row-end: 6;
          margin-left: 5%;
        }

        &--red {
          grid-column-start: 3;
          grid-column-end: 4;
          grid-row-start: 5;
          grid-row-end: 6;
          margin-left: 10%;
        }

        &--sra {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 7;
          grid-row-end: 8;
          justify-self: center;
          margin-top: 10vh;
          margin-left: 20%;
        }

        &:not(.mobile) { @media screen and (max-width: 40em) { display: none; } }

        &.mobile {
          &-only { display: none; }
          
          @media screen and (max-width: 40em) {
            display: block !important;
            width: 90%;
            max-height: 200px;
            height: 200px;
            object-position: top;
          }
        }
      }
  }
</style>
