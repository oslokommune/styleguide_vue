<template>
  <font-awesome-icon :icon="icon" />
</template>

<script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  library.add(fas)

  export default {
    name: 'OsgVueIcon',
    components: {
      'font-awesome-icon': FontAwesomeIcon
    },

    props: {
      icon: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
