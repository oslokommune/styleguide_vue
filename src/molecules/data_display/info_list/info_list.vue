<template>
  <div class="osg-info-list">
    <ul>
      <li v-if="calendarTitle || calendarText">
        <div class="osg-icon osg-v-default osg-u-icon-calendar">
          <span class="osg-sr-only">Calendar</span>
        </div>
        <p>{{ calendarTitle }}</p>
        <a
          :is="calendarUrl ? 'a' : 'div'"
          :href="calendarUrl"
          :title="calendarText"
        >
          {{ calendarText }}
        </a>
      </li>

      <li v-if="locationTitle || locationText">
        <div class="osg-icon osg-v-default osg-u-icon-location-pin">
          <span class="osg-sr-only">Location</span>
        </div>
        <p>{{ locationTitle }}</p>
        <a
          :is="locationUrl ? 'a' : 'div'"
          :href="locationUrl"
        >
          {{ locationText }}
        </a>
      </li>

    </ul>
  </div>
</template>

<script>

  export default {
    name: "OsgInfoList",

    props: {
      calendarTitle: {
        type: String,
        required: true,
      },

      calendarText: {
        type: String,
      },

      calendarUrl: {
        type: String,
      },
      
      locationTitle: {
        type: String,
        required: true,
      },

      locationText: {
        type: String,
      },

      locationUrlText: {
        type: String,
      },

      locationUrl: {
        type: String,
      }
    },
  }
  
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources.sass"
  @import "~styleguide/src/assets/sass/common/utils"
  @import "~styleguide/src/molecules/data_display/info_list/info_list.sass"
</style>



