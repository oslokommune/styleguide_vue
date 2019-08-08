<template>
  <div
    class="osg-menu"
    :class="[{ 'osg-menu--open': isOpen }]"
  >
    <osg-vue-button
      @click="$emit('toggleState')"
      class="osg-button-hamburger osg-button--outline"
    >
      <slot name="content">
        <span
          class="osg-menu__button__text-close"
          v-if="isOpen">
          {{ menuTextClose }}
        </span>
        <span class="osg-menu__button__text">
          {{ menuText }}
        </span>
        <span class="osg-menu__button__icon">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </slot>
    </osg-vue-button>
  </div>
</template>

<script>
  import OsgVueButton from '../../../atoms/buttons/button/button'

  export default {
    name: 'OsgVueMenu',

    components: {
      OsgVueButton
    },

    props: {
      isOpen: {
        type: Boolean,
        required: false
      },

      menuText: {
        type: String,
        required: true
      },

      menuTextClose: {
        type: String,
        required: true
      },
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/common.sass"
  @import "~styleguide/src/molecules/navigation/menu/menu.sass"
</style>

