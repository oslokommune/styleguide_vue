<template>
  <div class="osg-card">
    <a class="osg-card__wrapper" :href="link.url" :title="link.title">
      <div v-if="image" class="osg-card__image-container">
        <figure class="osg-figure osg-v-default ">
          <picture>
            <img :src="image.url" :alt="image.alt" />
          </picture>
        </figure>
      </div>
      <osg-vue-content-box>
        <slot />
      </osg-vue-content-box>
    </a>
  </div>
</template>

<script>
import OsgVueContentBox from '../../../molecules/content_display/content_box/content_box'

export default {
  name: 'OsgCard',

  components: {
    OsgVueContentBox
  },

  props: {
    isDownload: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object
    },
    link: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources"
  @import "~styleguide/src/assets/sass/common"
  @import "~styleguide/src/organisms/cards/card/card"
</style>
