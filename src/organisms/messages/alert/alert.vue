<template>
  <div
    class="osg-alert"
    :class="[{ 'osg-v-open': isOpen }]">

    <a href="#"
      class="osg-alert__trigger"
      @click="$emit('toggleAlert')"
    >
      <slot />
    </a>

    <div class="osg-alert__overlay-wrapper"
      role="alertdialog"
      aria-modal="true"
      :aria-labelledby="buttonAriaLabelledBy"
      :aria-describedby="buttonAriaDescribedBy"
    >
      <div class="osg-alert__overlay">
        <div class="osg-alert__overlay-top">
          <div class="osg-alert__white-space"></div>
          <osg-vue-button
            @click="$emit('toggleAlert')"
            :is-circle="true"
            :color="buttonColor"
            :attrs="buttonAttrs"
          >
            <osg-vue-icon :iconName="iconName" />
          </osg-vue-button>
        </div>
        <div class="osg-alert__content osg-content">
          <slot name="alertContent" />
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
      },

      buttonColor: {
        type: String,
        required: false,
        default: 'yellow'
      },

      buttonAriaLabelledBy: {
        type: String,
        required: false
      },

      buttonAriaDescribedBy: {
        type: String,
        required: false
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
