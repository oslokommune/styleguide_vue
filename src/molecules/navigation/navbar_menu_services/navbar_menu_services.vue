<template>
  <div
    class="osg-navbar-menu-services"
    :class="[{
      'osg-navbar-menu-services--expanded': isExpanded,
      'osg-navbar-menu-services--overlay': hasOverlay && isExpanded
    }]"
  >
    <nav>
      <osg-vue-button
        @click="$emit('toggleState')"
        class="osg-hamburger-button osg-button--outline"
      >
        <slot name="content">
          <span
            class="osg-hamburger-button__text-close"
            v-if="isExpanded">
            {{ menuTextClose }}
          </span>
          <span class="osg-hamburger-button__text">
            {{ menuText }}
          </span>
        </slot>
        <span class="osg-hamburger-button__icon">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </osg-vue-button>

      <slot name="menuOtherLinks">
      </slot>

      <div class="osg-expanded-content">
        <slot name="menuListExpanded">
        </slot>
      </div>
    </nav>
    <div class="osg-overlay"></div>
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
      isExpanded: {
        type: Boolean,
        required: false
      },

      hasOverlay: {
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
  @import "~styleguide/src/molecules/navigation/navbar_menu_services/navbar_menu_services.sass"
</style>

