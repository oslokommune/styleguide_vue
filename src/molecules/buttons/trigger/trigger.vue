<template>
  <osg-vue-button @click="$emit('toggleState')">
    <osg-vue-icon :icon="icon" />
    {{ text }}
  </osg-vue-button>
</template>

<script>
  import OsgVueButton from '../../../atoms/buttons/button/button'
  import OsgVueIcon from '../../../atoms/icons/icon/icon'

  export default {
    name: 'OsgVueTrigger',

    components: {
      OsgVueButton, OsgVueIcon
    },

    props: {
      stateIcons: {
        type: Object,
        default: {
          on: 'toggle-on',
          off: 'toggle-off'
        }
      },
      text: {
        type: String,
        default: 'Lorem ipsum'
      },
      state: {
        type: Boolean,
        required: false
      }
    },

    computed: {
      icon() {
        return this.state ? this.stateIcons.on : this.stateIcons.off
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>
