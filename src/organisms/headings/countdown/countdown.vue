<template>
  <div
    v-if="timeDiff > 0"
    class="osg-countdown"
  >
    <h2>{{ title }}</h2>
    <vue-countdown
      :time="timeDiff"
      tag="div"
    >
      <template slot-scope="props">
        <div class="osg-countdown__timing">
          <div class="osg-countdown__days">
            <span>{{ props.days }}</span>
            <span>{{ langDays }}</span>
          </div>
          <div class="osg-countdown__hours">
            <span>{{ props.hours }}</span>
            <span>{{ langHours }}</span>
          </div>
          <div class="osg-countdown__minutes">
            <span>{{ props.minutes }}</span>
            <span>{{ langMinutes }}</span>
          </div>
          <div class="osg-countdown__seconds">
            <span>{{ props.seconds }}</span>
            <span>{{ langSeconds }}</span>
          </div>
        </div>
      </template>
    </vue-countdown>
  </div>
</template>

<script>
  import VueCountdown from '@chenfengyuan/vue-countdown'
  export default {
    components: {
      VueCountdown
    },

    props: {
      countDownTo: {
        type: String,
        required: true
      },

      title: {
        type: String,
        required: true
      },

      langDays: {
        type: String,
        required: true
      },

      langHours: {
        type: String,
        required: true
      },

      langMinutes: {
        type: String,
        required: true
      },

      langSeconds: {
        type: String,
        required: true
      }
    },

    computed: {
      timeDiff() {
        return new Date(this.countDownTo) - new Date()
      }
    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources.sass"
  @import "~styleguide/src/assets/sass/common/_utils.sass"
  @import "~styleguide/src/organisms/headings/countdown/countdown.sass"
</style>

<style lang="sass" scoped>
// stylefix for the extra element that vue-countdown adds
.osg-countdown > div
  flex-basis: 40%
</style>



