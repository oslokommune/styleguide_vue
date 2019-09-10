<template>
  <div class="carousel">
    <osg-vue-figure
      :url="imageArray[current].imageUrl"
      :url-mobile="imageUrlMobile"
      :url-tablet="imageUrlTablet"
      :url-desktop="imageUrlDesktop"
      :caption="imageArray[current].imageCaption"
      :sr-description="imageArray[current].imageCaption"
    >
      <div class="navigation">
        <osg-vue-button
          v-on:click="getPreviousImage"
          class="previous-image-button"
          :is-circle="true"
          :color="navigationArrowColor"
        >
          <osg-vue-icon :iconName="icons.previousIcon" />
        </osg-vue-button>

        <osg-vue-button
          v-on:click="getNextImage"
          :is-circle="true"
          :color="navigationArrowColor"
        >
          <osg-vue-icon :iconName="icons.nextIcon" />
        </osg-vue-button>
      </div>

      <div class="shapes">
        <osg-vue-shape
          :class="[
            'squared-shape',
            `osg-u-color-bg-${squareColor}` 
          ]"
        />

        <osg-vue-shape
          :class="[
            'circular-shape',
            'osg-v-circle',
            `osg-u-color-bg-${circleColor}`
          ]"
        />
      </div>

    </osg-vue-figure>
    <div class="osg-carousel-icons osg-u-margin-top-2">
      <osg-vue-shape
        v-for="(image, index) in images"
        v-bind:key="image.imageUrl"
        @click.native="setCurrentImage(index)"
        :class="[
          'osg-carousel-icon',
          current === index ? 'osg-carousel-current' : 'osg-v-circle',
        ]"
      />
    </div>

  </div>
</template>

<script>
  import OsgVueFigure from '../../../atoms/decorators/figure/figure.vue'
  import OsgVueShape from '../../../atoms/decorators/shape/shape.vue'
  import OsgVueButton from '../../../atoms/buttons/button/button'
  import OsgVueIcon from '../../../atoms/icons/icon/icon'

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
        default: {
          previousIcon: 'chevron-right',
          nextIcon: 'chevron-right'
        },
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
        type: String
      },
      
      images: {
        type: Array,
        required: true
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

      infiniteScrolling: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      current: 0,
      imageArray: [{
        imageUrl: "",
        imageCaption: "",
      }],
    }),

    mounted() {
      this.imageArray = this.images
    },

    computed: {
      getCurrentImage() {
        return this.imageArray[this.current]
      },
    },

    methods: {
      getPreviousImage() {
        const currentIndex = this.current
        const infiniteScrolling = this.infiniteScrolling
        const imageArrayElements = this.imageArray.length - 1
        

        if (infiniteScrolling) {
          if (currentIndex - 1 < 0) this.current = imageArrayElements
          else this.current = currentIndex - 1

        } else if (!infiniteScrolling) {
          if (currentIndex - 1 > 0) this.current = currentIndex - 1
        }
      },

      getNextImage() {
        const currentIndex = this.current
        const infiniteScrolling = this.infiniteScrolling
        const imageArrayElements = this.imageArray.length - 1

        if (infiniteScrolling) {
          if (currentIndex === imageArrayElements) this.current = 0
          else this.current = currentIndex + 1

        } else if (!infiniteScrolling) {
          if (currentIndex + 1 <= imageArrayElements) this.current = currentIndex + 1
        }
      },

      setCurrentImage(number) {
        const currentIndex = this.current
        if (currentIndex !== number) this.current = number
      }
    }
  }
</script>

<style lang="sass">
  @import "./carousel.scss"
</style>


