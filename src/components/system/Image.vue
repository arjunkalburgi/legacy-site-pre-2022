<template>
  <img class="Image b-lazy" :src="getImage" :alt="alttext" />
</template>

<script lang="js">
export default  {
  name: 'theImage',
  components: { },
  props: ["path", "alttext"],
  mounted () { },
  data () { return { } },
  methods: { },
  computed: {
    getImage() {
      return require("../../assets/pics/" + this.path);
    }
  }
}
</script>

<style scoped lang="scss">
.Image {
  object-fit: cover;
  object-position: center;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 3px;

  // DARK MODE
  @media (prefers-color-scheme: dark) {
    filter: brightness(0.6);
  }
}
</style>
