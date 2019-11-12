<template>
  <div
    class="osg-card"
    :class="[
      { 'osg-card--with-state': stateText },
      { 'osg-card--animate': hasAnimation }
    ]"
  >
    <a
      class="osg-card__wrapper"
      :is="url ? 'a' : 'div'"
      :href="url"
      :title="urlTitle"
    >
      <div v-if="imageUrl" class="osg-card__image-container">
        <osg-vue-figure
          :url="imageUrl"
          :url-mobile="imageUrlMobile"
          :url-tablet="imageUrlTablet"
          :url-desktop="imageUrlDesktop"
          :sr-description="imageSrDescription"
        />
        <div
          v-if="stateText"
          class="osg-card__state-text"
        >
          {{ stateText }}
        </div>
      </div>
      <osg-vue-content-box>
        <slot />
        <a
          v-if="searchResult && searchResultUrl"
          :href="searchResultUrl"
          class="osg-card__search-result"
        >
          {{ searchResult }}
        </a>
      </osg-vue-content-box>
    </a>
  </div>
</template>

<script>
  import OsgVueContentBox from '../../../molecules/content_display/content_box/content_box'
  import OsgVueFigure from '../../../atoms/decorators/figure/figure.vue'

  export default {
    name: 'OsgCard',

    components: {
      OsgVueContentBox,
      OsgVueFigure
    },

    props: {
      url: {
        type: String,
        default: null
      },

      urlTitle: {
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

      stateText: {
        type: String,
      },

      hasAnimation: {
        type: Boolean,
        default: false
      },

      searchResult: {
        type: String
      },

      searchResultUrl: {
        type: String
      }
    }
  }
</script>
