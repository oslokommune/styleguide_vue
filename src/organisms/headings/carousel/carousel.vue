<template>
  <div class="osg-carousel">
    <osg-vue-figure
      v-if="currentImage"
      :url="currentImage.url"
      :url-mobile="currentImage.imageUrlMobile || currentImage.url"
      :url-tablet="currentImage.imageUrlTablet || currentImage.url"
      :url-desktop="currentImage.imageUrlDesktop || currentImage.url"
      :sr-description="currentImage.caption"
    >
      <div class="osg-carousel__navigation">
        <osg-vue-button
          v-on:click="getPreviousImage"
          class="osg-carousel__previous-button"
          :is-circle="true"
          :color="navigationArrowColor"
        >
          <osg-vue-icon :iconName="icons.previousIcon" />
        </osg-vue-button>

        <osg-vue-button
          v-on:click="getNextImage"
          class="osg-carousel__next-button"
          :is-circle="true"
          :color="navigationArrowColor"
        >
          <osg-vue-icon :iconName="icons.nextIcon" />
        </osg-vue-button>
      </div>

      <div class="osg-carousel__shapes">
        <osg-vue-shape
          v-if="hasSquaredShape"
          :class="[
            'osg-carousel__squared-shape',
            `osg-u-color-bg-${squareColor}` 
          ]"
        />

        <osg-vue-shape
          v-if="hasCircularShape"
          :class="[
            'osg-carousel__circular-shape',
            'osg-v-circle',
            `osg-u-color-bg-${circleColor}`
          ]"
        />
      </div>

    </osg-vue-figure>
    <div class="osg-carousel__info osg-u-margin-top-2">
      <span class="osg-carousel__icons" v-if="hasCarouselIcons">
        <osg-vue-shape
          v-for="(image, index) in images"
          v-bind:key="image.url"
          @click.native="setCurrentImage(index)"
          :class="[
            'osg-carousel__icon',
            current === index ? 'osg-carousel__current-element' : 'osg-v-circle',
          ]"
        />
      </span>
      <span>
        {{ currentImage.caption }}
      </span>
    </div>
  </div>
</template>

<script>
  import OsgVueFigure from '../../../atoms/decorators/figure/figure.vue'
  import OsgVueShape from '../../../atoms/decorators/shape/shape.vue'
  import OsgVueButton from '../../../atoms/buttons/button/button.vue'
  import OsgVueIcon from '../../../atoms/icons/icon/icon.vue'

  export default {
    name: "OsgVueCarousel",

    components: {
      OsgVueFigure,
      OsgVueShape,
      OsgVueButton,
      OsgVueIcon
    },

    props: {
      icons: {
        type: Object,
        default () {
          return {
            previousIcon: 'chevron-left',
            nextIcon: 'chevron-right'
          }
        }
      },
      
      imageSrDescription: {
        type: String
      },
      
      images: {
        type: Array,
        required: true
      },

      hasCarouselIcons: {
        type: Boolean,
        default: false,
      },

      hasSquaredShape: {
        type: Boolean,
        default: true
      },

      hasCircularShape: {
        type: Boolean,
        default: true
      },

      circleColor: {
        type: String,
        default: 'red'
      },

      squareColor: {
        type: String,
        default: 'yellow'
      },

      navigationArrowColor: {
        type: String,
        default: "yellow"
      },

      infinite: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        current: 0,
        carouselIconsWidth: 0,
      };
    },

    computed: {
      currentImage: function() {
        if (!this.images) return {}
        return this.images[this.current]
      }
    },

    methods: {
      getPreviousImage() {
        const currentIndex = this.current
        const infinite = this.infinite
        const imagesLength = this.images.length - 1

        if (infinite) {
          if (currentIndex - 1 < 0) this.setCurrentImage(imagesLength)
          else this.setCurrentImage(currentIndex - 1)

        } else if (!infinite) {
          if (currentIndex - 1 >= 0) this.setCurrentImage(currentIndex - 1)
        }
      },

      getNextImage() {
        const currentIndex = this.current
        const infinite = this.infinite
        const imagesLength = this.images.length - 1

        if (infinite) {
          if (currentIndex === imagesLength) this.setCurrentImage(0)
          else this.setCurrentImage(currentIndex + 1)

        } else if (!infinite) {
          if (currentIndex + 1 <= imagesLength) this.setCurrentImage(currentIndex + 1)
        }
      },

      setCurrentImage(number) {
        const currentIndex = this.current
        if (currentIndex !== number) {
          this.current = number
        }
      },
    }
  }
</script>

<style lang="sass">
  @import "./carousel.sass"
</style>

