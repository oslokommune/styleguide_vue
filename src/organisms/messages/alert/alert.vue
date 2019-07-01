<template>
<div
  class="osg-alert"
  :class="[{ 'osg-v-open': isOpen }]">

  <div class="osg-alert__overlay-wrapper" role="alertdialog" aria-modal="true">
    <osg-vue-button
      @click="$emit('closeState')"
      :is-circle="true"
      color="yellow"
      :attrs="buttonAttrs"
    >
      <osg-vue-icon :iconName="iconName" />
    </osg-vue-button>

    <div class="osg-alert__overlay">
      <div class="osg-alert__overlay-top">
        <div class="osg-alert__white-space"></div>
      </div>
      <div class="osg-alert__content osg-content">
        <slot name="title" />
        <slot name="content" />
      </div>
    </div>
  </div>
</div>

</template>

<script>
  import OsgVueButton from '../../../atoms/buttons/button/button'
  import OsgVueIcon from '../../../atoms/icons/icon/icon'

  export default {
    name: 'OsgVueAlert',

    components: {
      OsgVueButton,
      OsgVueIcon
    },

    props: {
      icons: {
        type: Object,
        default: {
          close: 'x'
        },
        required: true
      },

      isOpen: {
        type: Boolean,
        required: false
      },

      buttonAriaLabel: {
        type: String,
        required: true
      }
    },

    computed: {
      iconName() {
        return this.icons.close
      },

      buttonAttrs() {
        return {
          'aria-label': this.buttonAriaLabel
        }
      }
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/common.sass"
  @import "~styleguide/src/organisms/messages/alert/alert.sass"
</style>
