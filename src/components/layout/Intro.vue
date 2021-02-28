<template lang="html">
  <section class="intro section" id="intro">
    <BackgroundAnimation class="intro_bgani" :total="number_of_leaves" />

    <theImage
      class="intro_image intro_image--innovation mobile"
      :path="innovationimage.path"
      :alttext="innovationimage.alttext"
    />
    <h2 class="intro_text intro_text--title">
      The Mission: Connect 🤙🏾 Make 🔨 Smile 😁
    </h2>
    <p class="intro_text intro_text--firstpara">
      I'm a doer. <br />
      What can I say, I got that extrovert energy.
    </p>
    <p class="intro_text intro_text--secondpara">
      I think being a people-person fuels my curiosity. <br />
      I mean, how crazy would it be to build something at scale, <br />
      that just works, for so many unique personalities?
    </p>
    <FloatingImage
      class="intro_image intro_image--abid"
      :image="abidimage.path"
      :alttext="abidimage.alttext"
    />
    <theImage
      class="intro_image mobile mobile-only"
      :path="abidimage.path"
      :alttext="abidimage.alttext"
    />
    <FloatingImage
      class="intro_image intro_image--red"
      :image="redimage.path"
      :alttext="redimage.alttext"
    />
    <p class="intro_text intro_text--thirdpara">
      For that dream, I've been a developer, a designer, <br />
      organized project specs, mapped out business models <br />
      and talked to experts in all kinds of different fields.
    </p>
    <FloatingImage
      class="intro_image intro_image--sra"
      :image="sraimage.path"
      :alttext="sraimage.alttext"
    />
    <p class="intro_text intro_text--fourthpara">
      Human beings are so complicated, <br />
      peace out I gotta go learn more!
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
  grid-template-rows: 230px 15rem 10rem 13rem 9rem 15rem 15rem;
  @media screen and (max-width: 40em) {
    padding: 100px 0 0;
    display: block;
  }

  &_bgani {
    left: calc((0.3 * 100vw) / -2);
    bottom: -10vw;
    right: calc((0.3 * 100vw) / -2);

    @media screen and (max-width: 80em) {
      left: calc((0.15 * 100vw) / -2);
      right: calc((0.15 * 100vw) / -2);
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
      @media screen and (max-width: 40em) {
        width: 100%;
      }
    }

    &:not(.intro_text--title) {
      @media screen and (min-width: 40em) {
        padding: 10%;
      }
    }

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

      @media screen and (min-width: 40em) {
        padding: 0 10%;
      }
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
      height: 100%;
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

    &:not(.mobile) {
      @media screen and (max-width: 40em) {
        display: none;
      }
    }

    &.mobile {
      &-only {
        display: none;
      }

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
