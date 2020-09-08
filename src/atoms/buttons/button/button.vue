<template>
  <button
    class="osg-button"
    :class="[{ 'osg-button--outline': isOutline, 'osg-button--circle': isCircle }, 'osg-button--' + color]"
    v-bind="attrs"
    @click="onClick">
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

    onClick: {
      type: Function
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
