<template>
  <div
    class="osg-shape-hero"
    :class="[
      { 'osg-v-circle': isCircle }
    ]"
  >
    <osg-vue-shape
      :class="[
        'osg-u-color-bg-' + mainColor
      ]"
    >
      <div class="osg-shape-hero__content">
        <slot />
      </div>
    </osg-vue-shape>
    <osg-vue-shape
      :image-url="imageUrl"
      :image-url-mobile="imageUrlMobile"
      :image-url-tablet="imageUrlTablet"
      :image-url-desktop="imageUrlDesktop"
      :image-caption="imageCaption"
      :image-sr-description="imageSrDescription"
    >
      <div
        v-if="!isCircle"
        class="osg-shape-hero__circle-shape"
        :class="[
          'osg-u-color-bg-' + circleBgColor
        ]"
      >
        <osg-vue-shape
          :class="[
            'osg-u-color-bg-' + circleColor
          ]"
        />
      </div>
    </osg-vue-shape>
  </div>
</template>

<script>
import OsgVueShape from '../../../atoms/decorators/shape/shape'
export default {
  name: 'OsgVueShapeHero',

  components: {
    OsgVueShape
  },

  props: {
    isCircle: {
      type: Boolean,
      default: false
    },

    mainColor: {
      type: String,
      default: 'yellow'
    },

    circleColor: {
      type: String,
      default: 'yellow'
    },

    circleBgColor: {
      type: String,
      default: 'white'
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
