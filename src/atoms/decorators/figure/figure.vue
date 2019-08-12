<template>
  <figure class="osg-figure">
    <picture>
      <source v-if="urlMobile" :srcset="urlMobile" media="(max-width: 768px)" />
      <source v-if="urlTablet" :srcset="urlTablet" media="(min-width: 769px)" />
      <source v-if="urlDesktop" :srcset="urlDesktop" media="(min-width: 1088px)" />
      <img :src="url" :alt="srDescription" />
    </picture>
    <figcaption v-if="caption" class="osg-figcaption">
      {{ caption }}
    </figcaption>
    <slot />
  </figure>
</template>

<script>
  export default {
    name: 'OsgVueFigure',

    props: {
      url: {
        type: String,
        required: true
      },

      urlMobile: {
        type: String
      },

      urlTablet: {
        type: String
      },

      urlDesktop: {
        type: String
      },

      srDescription: {
        type: String,
        required: true
      },

      caption: {
        type: String
      }
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources.sass"
  @import "~styleguide/src/assets/sass/common/_utils.sass"
  @import "~styleguide/src/atoms/decorators/figure/figure.sass"
</style>
