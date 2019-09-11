<template>
  <div class="osg-carousel">
    <osg-vue-figure
      :url="imageArray[current].imageUrl"
      :url-mobile="imageUrlMobile"
      :url-tablet="imageUrlTablet"
      :url-desktop="imageUrlDesktop"
      :sr-description="imageArray[current].imageCaption"
    >
      <div class="osg-carousel-navigation">
        <osg-vue-button
          v-on:click="getPreviousImage"
          class="osg-carousel-previous-button"
          :is-circle="true"
          :color="navigationArrowColor"
        >
          <osg-vue-icon :iconName="icons.previousIcon" />
        </osg-vue-button>

        <osg-vue-button
          v-on:click="getNextImage"
          class="osg-carousel-next-button"
          :is-circle="true"
          :color="navigationArrowColor"
        >
          <osg-vue-icon :iconName="icons.nextIcon" />
        </osg-vue-button>
      </div>

      <div class="osg-carousel-shapes">
        <osg-vue-shape
          :class="[
            'osg-squared-shape',
            `osg-u-color-bg-${squareColor}` 
          ]"
        />

        <osg-vue-shape
          :class="[
            'osg-circular-shape',
            'osg-v-circle',
            `osg-u-color-bg-${circleColor}`
          ]"
        />
      </div>


    </osg-vue-figure>
    <div class="osg-carousel-info osg-u-margin-top-2">
      <span class="osg-carousel-icons">
        <osg-vue-shape
          v-for="(image, index) in images"
          v-bind:key="image.imageUrl"
          @click.native="setCurrentImage(index)"
          :class="[
            'osg-carousel-icon',
            current === index ? 'osg-carousel-current' : 'osg-v-circle',
          ]"
        />
      </span>
      <span>
        {{ imageArray[current].imageCaption}}
      </span>
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

      infinite: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      current: 0,
      carouselIconsWidth: 0,
      imageArray: [{
        imageUrl: "",
        imageCaption: "",
      }],
      mobileWidth: 0,
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
        const infinite = this.infinite
        const imageArrayElements = this.imageArray.length - 1
        
        if (infinite) {
          if (currentIndex - 1 < 0) this.current = imageArrayElements
          else this.current = currentIndex - 1

        } else if (!infinite) {
          if (currentIndex - 1 >= 0) this.current = currentIndex - 1
        }
      },

      getNextImage() {
        const currentIndex = this.current
        const infinite = this.infinite
        const imageArrayElements = this.imageArray.length - 1

        if (infinite) {
          if (currentIndex === imageArrayElements) this.current = 0
          else this.current = currentIndex + 1

        } else if (!infinite) {
          if (currentIndex + 1 <= imageArrayElements) this.current = currentIndex + 1
        }
      },

      setCurrentImage(number) {
        const currentIndex = this.current
        if (currentIndex !== number) this.current = number
      },
    }
  }
</script>

<style lang="sass">
  @import "./carousel.sass"
</style>


