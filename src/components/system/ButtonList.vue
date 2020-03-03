<template lang="html">
  <ul class="buttonlist">

    <li v-if="hasButton" :key="button.text" class="button">
      <Button class="buttonlist_button" :link="button.link" :text="button.text" />
    </li>

    <li v-for="item in list" :key="item.icon" class="icon">
      <a :href="item.link" class="buttonlist_icon" :class="hasButton ? '' : 'light'">
        <font-awesome-icon :icon="icon[item.icon]" />
      </a>
    </li>
  </ul>
</template>

<script lang="js">
  import Button from './../system/Button.vue'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { faEnvelope, faEdit } from '@fortawesome/free-regular-svg-icons'
  import { faTwitter, faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons'

  export default  {
    name: 'ButtonList',
    components: {
      Button,
      FontAwesomeIcon
    },
    props: ['hasButton', 'button', 'list'],
    mounted () {

    },
    data () {
      return {
        icon: {
          envelope: faEnvelope,
          edit: faEdit,
          twitter: faTwitter,
          github: faGithub,
          linkedin: faLinkedinIn,
          codepen: faCodepen,
        }
      }
    },
    methods: {

    },
    computed: {

    }
  }

</script>

<style scoped lang="scss">
  .buttonlist {
    position: absolute;
    padding-left: 0px;
  
    li {
      float: left;
      list-style: none;

      a.buttonlist_icon {
        font: var(--icon-text);
        color: var(--brand-contrastdark);

        &.light {
          color: var(--brand-contrastlight);
        }
      }
    }
    li:not(:first-of-type) { margin: 0 0 0 20px; }
  }
</style>
