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
        @click="$emit('navbarMenuServicesClicked')"
        class="osg-hamburger-button osg-button--outline"
      >
        <slot name="content">
          <span
            class="osg-hamburger-button__text-close"
            v-if="isExpanded">
            {{ srMenuTextClose}}
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

      <div class="osg-expanded-content">
        <slot />
      </div>

    </nav>
    <div class="osg-overlay"></div>
  </div>
</template>

<script>
  import OsgVueButton from '../../../atoms/buttons/button/button'

  export default {
    name: 'OsgVueNavbarMenuServices',

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

      menuListExpanded: {
        type: String,
        required: true
      },

      srMenuTextClose: {
        type: String,
        required: true
      }
    }
  }
</script>
