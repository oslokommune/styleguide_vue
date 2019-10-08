<template>
<div class="osg-carousel">
  <div class="osg-carousel__wrapper">
    <div class="osg-carousel__figures" ref="content">
      <osg-vue-figure
        v-for="currentImage in images"
        :url="currentImage.imageUrl"
        :url-mobile="currentImage.imageUrlMobile || currentImage.imageUrl"
        :url-tablet="currentImage.imageUrlTablet || currentImage.imageUrl"
        :url-desktop="currentImage.imageUrlDesktop || currentImage.imageUrl"
        :sr-description="currentImage.imageCaption"
        >
      </osg-vue-figure>
    </div>
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
  </div>
  <div class="osg-carousel__info osg-u-margin-top-2">
    <span class="osg-carousel__icons" v-if="hasCarouselIcons">
      <osg-vue-shape
        v-for="(image, index) in images"
        v-bind:key="image.imageUrl"
        @click.native="setCurrentImage(index)"
        :class="[
                'osg-carousel__icon',
                current === index ? 'osg-carousel__current-element' : 'osg-v-circle',
                ]"
        />
    </span>
    <span>
      {{ currentImage.imageCaption }}
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

    data: () => ({
      current: 0,
      carouselIconsWidth: 0,
      slideWidth: 0,
      imageArray: [{
        imageUrl: "",
        imageCaption: "",
      }],
      currentImage: {
        imageUrl: "",
        imageCaption: "",
      },
      transitionDelay: 0,
      translateX: 0,
      wrapperWidth: 0,
      slides: []
    }),

    mounted() {
      this.imageArray = this.images
      this.currentImage = this.imageArray[this.current]
      this.slides = this.$refs.content.children
      this.resizeAndUpdate()
      window.addEventListener("resize", this.resizeAndUpdate)
    },

    beforeDestroy() {
      window.removeEventListener("resize", this.resizeAndUpdate)
    },

    updated() {
      this.currentImage = this.imageArray[this.current]
    },

    methods: {
      resizeAndUpdate() {
        this.slideWidth = this.$refs.content.clientWidth
        this.slides.forEach((e, i) => {
          if (i === this.current) {
            e.style.width = `${this.slideWidth}px`
          } else {
            e.style.width = "0px"
          }
        })
      },
      getPreviousImage() {
        const currentIndex = this.current
        const infinite = this.infinite
        const imageArrayElements = this.imageArray.length - 1

        if (infinite) {
          if (currentIndex - 1 < 0) this.setCurrentImage(imageArrayElements)
          else this.setCurrentImage(currentIndex - 1)

        } else if (!infinite) {
          if (currentIndex - 1 >= 0) this.setCurrentImage(currentIndex - 1)
        }
      },

      getNextImage() {
        const currentIndex = this.current
        const infinite = this.infinite
        const imageArrayElements = this.imageArray.length - 1

        if (infinite) {
          if (currentIndex === imageArrayElements) this.setCurrentImage(0)
          else this.setCurrentImage(currentIndex + 1)

        } else if (!infinite) {
          if (currentIndex + 1 <= imageArrayElements) this.setCurrentImage(currentIndex + 1)
        }
      },

      setCurrentImage(number) {
        const currentIndex = this.current
        if (currentIndex !== number) {
          this.current = number
          this.currentImage = this.imageArray[number]
          this.resizeAndUpdate()
        }
      },
    }
  }
</script>

<style lang="sass">
  @import "./carousel.sass"
</style>


