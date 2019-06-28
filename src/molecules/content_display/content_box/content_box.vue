<template>
  <div class="osg-content-box osg-v-default ">
    <div class="osg-content-box__container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OsgContentBox'
}
</script>


<style lang="sass">
  @import "~styleguide/src/assets/sass/resources"
  @import "~styleguide/src/molecules/content_display/content_box/content_box"
</style>
