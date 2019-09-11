<template>
  <div class="osg-carousel">
    <osg-vue-figure
      :url="imageArray[current].imageUrl"
      :url-mobile="imageUrlMobile"
      :url-tablet="imageUrlTablet"
      :url-desktop="imageUrlDesktop"
      :caption="imageArray[current].imageCaption"
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
    <span class="osg-carousel-icons osg-u-margin-top-2" ref="carouselIcons">
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

    ready() {
      document.addEventListener("resize", this.isMobileWindowWidth)
      this.isMobileWindowWidth()
    },

    mounted() {
      this.imageArray = this.images 
      this.carouselIconsWidth = this.$refs.carouselIcons.getBoundingClientRect().width
      this.isMobileWindowWidth()
    },

    computed: {
      getCurrentImage() {
        return this.imageArray[this.current]
      },
    },

    updated() {
      this.isMobileWindowWidth()
      console.log(this.carouselIconsWidth, window.innerWidth)

      // Get the first and only DOM element of the osg-figcaption class and position it dynamically
      const figCaptionElement = document.getElementsByClassName("osg-figcaption")[0]
      if (!this.mobileWidth) figCaptionElement.style = `margin-left: ${this.carouselIconsWidth + 10}px; margin-top: 5px`
      else if (this.mobileWidth) figCaptionElement.style = "margin-left: 0; margin-top: 5px";
    },

    beforeDestroy() {
      document.removeEventListener("resize", this.isMobileWindowWidth)
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

      isMobileWindowWidth() {
        console.log(window.innerWidth)
        console.log(parseInt(window.innerWidth) <= parseInt(768))
        this.mobileWidth = parseInt(window.innerWidth) <= parseInt(768);
      }
    }
  }
</script>

<style lang="sass">
  @import "./carousel.sass"
</style>


