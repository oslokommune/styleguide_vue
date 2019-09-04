<template>
  <div
    class="osg-list-card"
    :class="[
      { 'osg-list-card--with-state': stateText },
      { 'osg-list-card--animate': hasAnimation },
      { 'osg-list-card--show-search-result': searchResult }
    ]"
  >
    <a :is="url ? 'a' : 'div'" :href="url" :title="urlTitle">
      <div v-if="imageUrl" class="osg-list-card__image-container">
        <osg-vue-figure
          :url="imageUrl"
          :url-mobile="imageUrlMobile"
          :url-tablet="imageUrlTablet"
          :url-desktop="imageUrlDesktop"
          :sr-description="imageSrDescription"
        />
        <div v-if="stateText" class="osg-list-card__state-text">{{ stateText }}</div>
      </div>
      <osg-vue-content-box>
        <slot />
        <a
          v-if="searchResult && searchResultUrl"
          :href="searchResultUrl"
          class="osg-list-card__search-result"
        >{{ searchResult }}</a>
      </osg-vue-content-box>
    </a>
  </div>
</template>

<script>
import OsgVueContentBox from "../../../molecules/content_display/content_box/content_box";
import OsgVueFigure from "../../../atoms/decorators/figure/figure.vue";

export default {
  name: "OsgListCard",

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

    stateText: {
      type: String
    },

    hasAnimation: {
      type: Boolean,
      default: false
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

    searchResult: {
      type: String
    },

    searchResultUrl: {
      type: String
    }
  }
};
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources"
  @import "~styleguide/src/assets/sass/common/utils"
  @import "~styleguide/src/organisms/cards/list_card/list_card"
</style>
