<template>
  <a
    :is="url ? 'a' : 'div'"
    :href="url"
    :title="urlTitle"
    :target="target"
    class="osg-hero"
    :class="[
      { 'osg-hero--circle': isCircle },
      'osg-hero--' + contentPosition,
      'osg-hero--' + contentPositionTablet + '-tablet-and-up'
    ]"
  >
    <div class="osg-hero__image">
      <osg-vue-shape
        :image-url="imageUrl"
        :image-url-mobile="imageUrlMobile"
        :image-url-tablet="imageUrlTablet"
        :image-url-desktop="imageUrlDesktop"
        :image-caption="imageCaption"
        image-sr-description="Descriptive text for screen readers"
      />
    </div>
    <div class="osg-hero__content">
      <slot />
    </div>
  </a>
</template>

<script>
  import OsgVueShape from '../../../atoms/decorators/shape/shape'
  export default {
    name: 'OsgVueHero',

    components: {
      OsgVueShape
    },

    props: {
      url: {
        type: String
      },

      urlTitle: {
        type: String
      },

      target: {
        type: String,
        default: '_self'
      },

      isCircle: {
        type: Boolean,
        default: false
      },

      contentPosition: {
        type: String,
        default: 'right'
      },

      contentPositionTablet: {
        type: String,
        default: 'right'
      },

      url: {
        type: String
      },

      urlTitle: {
        type: String
      },

      target: {
        type: String,
        default: '_self'
      },

      imageUrl: {
        type: String
      },

      imageUrlMobile: {
        type: String
      },

      imageUrlTablet: {
        type: String
      },

      imageUrlDesktop: {
        type: String
      },

      imageSrDescription: {
        type: String
      },

      imageCaption: {
        type: String
      }
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources.sass"
  @import "~styleguide/src/assets/sass/common/_utils.sass"
  @import "~styleguide/src/atoms/decorators/shape/shape.sass"
  @import "~styleguide/src/organisms/navigation/hero/hero.sass"
</style>
