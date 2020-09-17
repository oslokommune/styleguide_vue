<template>
<div
    class="osg-event"
    :class="[
      { 'osg-event--with-state': stateText },
    ]"
  >
  <div class="osg-event__header">
    <h2>
      {{ title }}
    </h2>
  </div>
  <div class="osg-event__image">
    <div v-if="imageUrl" class="osg-event__image-container">
        <osg-vue-figure
          :url="imageUrl"
          :url-mobile="imageUrlMobile"
          :url-tablet="imageUrlTablet"
          :url-desktop="imageUrlDesktop"
          :sr-description="imageSrDescription"
        />

        <div
          v-if="stateText"
          class="osg-event__state-text"
        >
          {{ stateText }}
        </div>

    </div>
    <div class="osg-event__info">
      <osg-vue-info-list
        :calendarTitle="calendarTitle"
        :calendarText="calendarText"
        :calendarUrl="calendarUrl"
        :locationTitle="locationTitle"
        :locationText="locationText"
        :locationUrl="locationUrl"
      />

      <div
        v-if="imageCaption"
        class="osg-event__caption"
      >
        {{ imageCaption }}
      </div>

    </div>
  </div>
</div>
</template>

<script>
import OsgVueFigure from '../../../atoms/decorators/figure/figure.vue'
import OsgVueInfoList from '../../../molecules/data_display/info_list/info_list.vue'

export default {
  name: 'OsgEvent',

  components: {
    OsgVueFigure,
    OsgVueInfoList
  },

  props: {
    title: {
      type: String,
      required: true
    },

    imageUrl: {
      type: String,
      required: true
    },

    imageCaption: {
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
      type: String
    },

    calendarTitle: {
      type: String,
      required: true
    },

    calendarText: {
      type: String
    },

    calendarUrl: {
      type: String
    },

    locationTitle: {
      type: String,
      required: true
    },

    locationText: {
      type: String
    },

    locationUrlText: {
      type: String
    },

    locationUrl: {
      type: String
    }
  }
}
</script>
