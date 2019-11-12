<template>
  <header class="osg-header">
    <osg-vue-navbar-menu
      @navbarMenuClicked="$emit('headerClicked')"
      :is-open="isOpen"
      :aria-label="buttonAriaLabel"
    >
      <slot />
    </osg-vue-navbar-menu>
    <div class="osg-header__title">
      <h1>
        <a :href="brandUrl">
          {{ brandName }}
        </a>
      </h1>
    </div>
    <div class="osg-header__link">
      <a :href="rootLevelLinkUrl" :title="rootLevelLinkTitle">
        <span v-if="rootLevelLinkText">
          {{ rootLevelLinkText }}
        </span>
        <osg-vue-icon iconName="chevron-right" />
      </a>
    </div>
  </header>
</template>

<script>
  import OsgVueNavbarMenu from "../../../molecules/navigation/navbar_menu/navbar_menu.vue"
  import OsgVueIcon from '../../../atoms/icons/icon/icon'
  export default {
    name: "OsgVueHeader",

    components: {
      OsgVueNavbarMenu,
      OsgVueIcon
    },

    props: {
      brandName: {
        type: String,
        required: true
      },

      brandUrl: {
        type: String,
        required: true
      },

      isOpen: {
        type: Boolean,
        default: false
      },

      buttonAriaLabel: {
        type: String,
        required: true
      },

      rootLevelLinkUrl: {
        type: String,
        required: true
      },

      rootLevelLinkText: {
        type: String
      },

      rootLevelLinkTitle: {
        type: String
      }
    },
  }
</script>

