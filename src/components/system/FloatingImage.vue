<template lang="html">
  <div class="FloatingImage" v-parallax="-0.15">
    <div class="FloatingImage_box FloatingImage_box--color"></div>
    <theImage
      class="FloatingImage_box FloatingImage_box--image"
      :path="image"
      :alttext="alttext"
    />
  </div>
</template>

<script lang="js">
import theImage from './Image.vue'

export default  {
  name: 'FloatingImage',
  props: ["image", "alttext"],
  components: {
    theImage,
  },
  mounted () { },
  data () { return { } },
  methods: { },
  computed: { }
}
</script>

<style lang="scss">
.FloatingImage {
  &_box {
    width: 250px;
    height: 250px;
    border-radius: 3px;
    position: relative;

    &--color {
      background: var(--brand-colour);
      z-index: -1;
    }

    &--image {
      box-shadow: -20px 26px 54px rgba(51, 51, 51, 0.28);
      z-index: -1;
      background-size: cover;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-image: none;
      left: 20px;
      top: -275px;
    }
  }
}

.image.abid {
  background-image: url("../../assets/pics/abid.jpg");
  background-position-y: top;
}
.image.red {
  background-image: url("../../assets/pics/red.jpg");
}
.image.sra {
  background-image: url("../../assets/pics/sra.jpg");
}
</style>
