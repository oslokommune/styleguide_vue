<template>
  <nav
    class="osg-navbar-menu"
    :class="[{ 'osg-navbar-menu--open': isOpen }]"
  >
    <div class="osg-navbar-menu__overlay-wrapper">
      <div class="osg-navbar-menu__overlay"></div>
    </div>
    <div class="osg-navbar-menu__hamburger">
      <button
        @click="$emit('navbarMenuClicked')"
        class="osg-navbar-menu__hamburger-icon"
        aria-haspopup="true"
        :aria-expanded="isOpen ? 'true' : 'false'"
        :aria-label="ariaLabel"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div class="osg-navbar-menu__content">
      <div class="osg-navbar-menu__hamburger-close">
        <button
          @click="$emit('navbarMenuClicked')"
          class="osg-navbar-menu__hamburger-icon"
          aria-haspopup="true"
          :aria-expanded="isOpen ? 'true' : 'false'"
          :aria-label="ariaLabel"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <slot />
    </div>
  </nav>
</template>

<script>
  export default {
    name: "OsgVueNavbarMenu",

    props: {
      isOpen: {
        type: Boolean,
        default: false
      },

      ariaLabel: {
        type: String,
        required: true
      }
    }
  }
</script>
