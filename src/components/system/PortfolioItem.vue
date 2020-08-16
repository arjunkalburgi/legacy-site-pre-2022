<template lang="html">
  <div class="portfolioitem">
    <h2 class="portfolioitem_title">{{ item.title }}</h2>
    <small class="portfolioitem_tags">{{ item.tags }}</small>
    <p class="portfolioitem_description">{{ item.description }}</p>
    <div>
      <Button
        class="portfolioitem_button"
        :link="item.buttonlink"
        :text="item.buttontext"
      />
    </div>
  </div>
</template>

<script lang="js">
import Button from './../system/Button.vue'

export default  {
  name: 'PortfolioItem',
  components: {
    Button,
  },
  props: ["item"],
  mounted () { },
  data () { return { } },
  methods: { },
  computed: { }
}
</script>

<style scoped lang="scss">
.portfolioitem {
  margin: 5vh 0;

  @media screen and (max-width: 40em) {
    display: block;
  }

  > * {
    margin: 0;
  }

  &_left {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 5;
  }

  &_title {
    margin-bottom: 1vh;
    white-space: nowrap;
    @media screen and (max-width: 40em) {
      white-space: unset;
    }
  }

  &_tags {
    margin-bottom: 3vh;
  }

  &_description {
    margin-bottom: 3vh;
  }

  &_button {
  }
}
</style>
