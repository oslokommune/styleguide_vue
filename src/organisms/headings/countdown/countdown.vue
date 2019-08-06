<template>
  <div class="osg-countdown ">
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    <div class="osg-countdown__timing">
      <div class="osg-countdown__days">
        <span>30</span>
        <span>Morbi</span>
      </div>
      <div class="osg-countdown__hours">
        <span>30</span>
        <span>Velit</span>
      </div>
      <div class="osg-countdown__minutes">
        <span>30</span>
        <span>Consequat</span>
      </div>
      <div class="osg-countdown__seconds">
        <span>30</span>
        <span>Feugiat</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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


