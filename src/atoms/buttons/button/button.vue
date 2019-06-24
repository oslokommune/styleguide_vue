<template>
  <button
    class="osg-vue-button osg-button"
    :class="[{ 'osg-button--outline': isOutline }, 'osg-button--' + color]"
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

      color: {
        type: String,
        default: 'blue-dark'
      }
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/common.sass"
  @import "~styleguide/src/atoms/buttons/button/button.sass"
  .osg-vue-button
    [class^=osg-u-icon-]
      margin-right: 10px
</style>
