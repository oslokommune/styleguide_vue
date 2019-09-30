<template>
  <a
    :is="url ? 'a' : 'div'"
    :href="url"
    :title="urlTitle"
    :target="target"
    class="osg-shape"
    :class="[{ 'osg-v-circle': isCircle }, {'osg-v-image': imageUrl }]"
  >
    <osg-vue-figure
      v-if="imageUrl"
      :url="imageUrl"
      :url-mobile="imageUrlMobile"
      :url-tablet="imageUrlTablet"
      :url-desktop="imageUrlDesktop"
      :caption="imageCaption"
      :sr-description="imageSrDescription"
    >
      <slot />
    </osg-vue-figure>
    <slot v-else />
  </a>
</template>

<script>
  import OsgVueFigure from '../figure/figure.vue'
  export default {
    name: 'OsgVueShape',

    components: {
      OsgVueFigure
    },

    props: {
      isCircle: {
        type: Boolean,
        default: false
      },

      url: {
        type: String
      },

      urlTitle: {
        type: String
      },

      target: {
        type: String,
        default: null
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

