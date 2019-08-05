<template>
  <div class="osg-call-to-action">
    <osg-vue-figure
      :url="imageUrl"
      :url-mobile="imageUrlMobile"
      :url-tablet="imageUrlTablet"
      :url-desktop="imageUrlDesktop"
      :caption="imageCaption"
      :sr-description="imageSrDescription"
    />
    <div class="section container">
      <div class="osg-call-to-action__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  import OsgVueFigure from '../../../atoms/decorators/figure/figure.vue'
  export default {
    name: 'OsgVueCallToAction',

    components: {
      OsgVueFigure
    },

    props: {
      imageUrl: {
        type: String,
        required: true
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
        type: String,
        required: true
      },

      imageCaption: {
        type: String
      }
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources.sass"
  @import "~styleguide/src/organisms/navigation/call_to_action/call_to_action.sass"
</style>
