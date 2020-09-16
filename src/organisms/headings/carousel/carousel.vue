<template>
  <div class="osg-carousel">
    <div class="osg-carousel__content" ref="content">
      <div
        ref="track"
        class="osg-carousel__track"
        :style="{transform: `translate(${translateX}px)`, transition: `transform ${settings.timing} ${transitionDelay}ms`}"
      >
        <div class="osg-carousel__slides" ref="slides">
          <osg-vue-figure
            :id="`image_${index}`"
            :key="image.url"
            v-for="(image, index) of this.images"
            :url="image.url"
            :url-mobile="image.imageUrlMobile ||image.url"
            :url-tablet="image.imageUrlTablet ||image.url"
            :url-desktop="image.imageUrlDesktop ||image.url"
            :caption="image.caption"
            :sr-description="image.srDescription || ''"
          />
        </div>
      </div>

      <div class="osg-carousel__navigation" v-if="this.images.length > 1">
        <osg-vue-button
            class="osg-carousel__previous-button"
            :is-circle="true"
            :color="navigationArrowColor"
            aria-label="Forrige bilde"
            :on-click="goToPrev"
        >
          <osg-vue-icon :iconName="icons.previousIcon" />
        </osg-vue-button>

        <osg-vue-button
            class="osg-carousel__next-button"
            :is-circle="true"
            :color="navigationArrowColor"
            aria-label="Neste bilde"
            :on-click="goToNext"
        >
          <osg-vue-icon :iconName="icons.nextIcon" />
        </osg-vue-button>
      </div>

      <div class="osg-carousel__shapes">
        <osg-vue-shape
          v-if="hasSquaredShape"
          class="osg-carousel__shape"
          :class="`osg-carousel__shape--color-${squareColor}`"
        />

        <osg-vue-shape
          v-if="hasCircularShape"
          :isCircle="hasCircularShape"
          class="osg-carousel__shape"
          :class="`osg-carousel__shape--color-${circleColor}`"
        />
      </div>
    </div>

    <div class="osg-carousel__info osg-u-margin-top-2">
      <span v-if="currentImage">
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
  name: 'OsgVueCarousel',

  components: {
    OsgVueFigure,
    OsgVueShape,
    OsgVueButton,
    OsgVueIcon
  },

  props: {
    /**
       * Slide number to start on.
       */
    initialSlide: {
      type: Number,
      default: 1
    },

    /**
       * Slide animation speed in milliseconds
       */
    speed: {
      type: Number,
      default: 300
    },

    /**
       * Transition timing function
       * Available: ease, linear, ease-in, ease-out, ease-in-out
       */
    timing: {
      type: String,
      default: 'ease-in-out'
    },

    /**
       * Settings object.
       * Used as an alternative to setting individual props.
       */
    options: {
      type: Object,
      default: () => null
    },

    icons: {
      type: Object,
      default () {
        return {
          previousIcon: 'chevron-left',
          nextIcon: 'chevron-right'
        }
      }
    },

    images: {
      type: Array,
      required: true
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
      default: 'yellow'
    }
  },

  data () {
    return {
      slides: [],
      currentSlide: null,
      transitionDelay: 0,
      translateX: 0,
      widthContainer: 0,
      widthSlide: 0,
      isSlideChanging: false,
      settings: {},
      initialSettings: {
        initialSlide: this.initialSlide,
        speed: this.speed,
        timing: this.timing
      }
    }
  },

  created () {
    // Read settings from options object
    if (this.options) {
      for (const key in this.options) {
        this.initialSettings[key] = this.options[key]
      }
    }

    // Load settings
    Object.assign(this.settings, this.initialSettings)
  },

  mounted () {
    // Windows resize listener
    window.addEventListener('resize', this.calculateWidthSlide)

    // Init carousel
    this.reload()
  },

  beforeDestroy () {
    // Remove resize listener
    window.removeEventListener('resize', this.calculateWidthSlide)
  },

  computed: {
    currentImage: function () {
      if (!this.images) {
        return
      }

      return this.images[this.currentSlide - 1]
    }
  },

  methods: {
    // Reload carousel
    reload () {
      this.calculateWidthSlide()
      this.prepareSettings()
      this.prepareSlides()
      this.prepareCarousel()
    },

    /**
       * Set window & container width, remove transition and calculate transition offset
       */
    calculateWidthSlide () {
      this.widthContainer = this.$refs.content.clientWidth
      this.widthSlide = this.widthContainer

      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.width = this.widthSlide + 'px'
      }

      this.transitionDelay = 0
      this.translateX = this.currentSlide * this.widthSlide * -1
    },

    /**
       * Convert HTML Collection to JS Array
       */
    htmlCollectionToArray (collection) {
      return Array.prototype.slice.call(collection, 0)
    },

    /**
       * Prepare settings object
       */
    prepareSettings () {
      this.settings = Object.assign({}, this.initialSettings)
    },

    /**
       * Prepare slides classes and styles
       */
    prepareSlides () {
      const slideLenth = this.$refs.slides.children.length
      const firstSlideClone = this.$refs.slides.children[0].cloneNode(true)
      firstSlideClone.id = 'carousel-end-clone'
      const lastSlideClone = this.$refs.slides.children[
        slideLenth - 1
      ].cloneNode(true)
      lastSlideClone.id = 'carousel-start-clone'

      this.$refs.slides.insertBefore(lastSlideClone, this.$refs.slides.children[0])
      this.$refs.slides.appendChild(firstSlideClone)

      this.slides = this.htmlCollectionToArray(this.$refs.slides.children)

      for (const slide of this.slides) {
        slide.classList.add('osg-carousel__slide')
      }
    },

    /**
       * Prepare carousel styles
       */
    prepareCarousel () {
      this.widthSlide = this.widthContainer

      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].style.width = this.widthSlide + 'px'
      }

      if (this.currentSlide === null) {
        this.currentSlide = this.settings.initialSlide
      }

      this.goTo(this.currentSlide, false)
    },

    getNextSlide (index) {
      switch (this.slides[index].id) {
        case 'carousel-start-clone':
          return this.slides.length - 2
        case 'carousel-end-clone':
          return 1
        default:
          return index
      }
    },

    // Go to next slide
    goToNext () {
      this.goTo(this.currentSlide + 1)
    },
    // Go to previous slide
    goToPrev () {
      this.goTo(this.currentSlide - 1)
    },

    // Go to slide
    goTo (index, transition = true) {
      if (index < 0 || index > this.slides.length - 1 || this.isSlideChanging) { return }

      if (transition) {
        this.isSlideChanging = true
        const nextSlide = this.getNextSlide(index)

        setTimeout(() => {
          this.isSlideChanging = false
        }, this.settings.speed)

        if (index !== nextSlide) {
          setTimeout(() => {
            this.goTo(nextSlide, false)
          }, this.settings.speed)
        }
      }
      this.transitionDelay = transition ? this.settings.speed : 0
      this.translateX = index * this.widthSlide * -1

      this.updateCurrentSlideIndex(index)
    },

    updateCurrentSlideIndex (index) {
      if (index === 0) {
        this.currentSlide = this.images.length
      } else if (index > (this.images.length)) {
        this.currentSlide = 1
      } else {
        this.currentSlide = index
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~styleguide/src/assets/sass/resources.sass";
  @import "./carousel.sass";
</style>
