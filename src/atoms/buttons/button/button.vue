<template>
  <button class="osg-button osg-v-default osg-button-green" v-bind="attrs" @click="$emit('click')">
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
      }
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/common.sass"
  @import "~styleguide/src/atoms/buttons/button/button.sass"
</style>
