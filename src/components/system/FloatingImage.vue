<template lang="html">
  <div>
    <div class="color-bg intro_image--box"></div>
    <div class="image-container intro_image--box">
      <div class="b-lazy image" :class="image"></div>
    </div>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'FloatingImage',
    props: ["image"],
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

  .image {
      background: linear-gradient(135deg, #dedede 0%, #dedede 40%, #bfbfbf 100%);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 100%;
      border-radius: 3px;
  }

  .image-container {
    box-shadow: -20px 26px 54px rgba(51, 51, 51, 0.28);
    z-index: -1;
    background-size: cover;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: none;
    left: 20px;
    top: -20px;
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
  }

  .image.abid { background-image: url("../../assets/pics/abid.jpg"); }
  .image.red { background-image: url("../../assets/pics/red.jpg"); }
  .image.sra { background-image: url("../../assets/pics/sra.jpg"); }
</style>
