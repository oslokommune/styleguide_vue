<template>
  <button
    class="osg-button"
    :class="[{ 'osg-button--outline': isOutline, 'osg-button--circle': isCircle }, 'osg-button--' + color]"
    v-bind="attrs"
    @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'OsgVueButton',

    props: {
      attrs: {
        type: Object,
        default: () => ({})
      },

      isOutline: {
        type: Boolean,
        default: false
      },

      isCircle: {
        type: Boolean,
        default: false
      },

      color: {
        type: String,
        default: 'blue-dark'
      }
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources.sass"
  @import "~styleguide/src/atoms/buttons/button/button.sass"
</style>
