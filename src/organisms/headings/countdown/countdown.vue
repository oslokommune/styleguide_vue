<template>
  <div class="osg-countdown">
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    <vue-countdown :time="2 * 24 * 60 * 60 * 1000">
      <template slot-scope="props">
        <div class="osg-countdown__timing">
          <div class="osg-countdown__days">
            <span>{{ props.days }}</span>
            <span>Dager</span>
          </div>
          <div class="osg-countdown__hours">
            <span>{{ props.hours }}</span>
            <span>Timer</span>
          </div>
          <div class="osg-countdown__minutes">
            <span>{{ props.minutes }}</span>
            <span>Minutter</span>
          </div>
          <div class="osg-countdown__seconds">
            <span>{{ props.seconds }}</span>
            <span>Sekunder</span>
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
        type: String
      }
    },

    computed: {

    }
  }
</script>

<style lang="sass">
  @import "~styleguide/src/assets/sass/resources.sass"
  @import "~styleguide/src/assets/sass/common/_utils.sass"
  @import "~styleguide/src/organisms/headings/countdown/countdown.sass"
</style>


