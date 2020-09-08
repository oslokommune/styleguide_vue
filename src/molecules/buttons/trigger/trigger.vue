<template>
  <osg-vue-button @click="$emit('toggleState')">
    <osg-vue-icon :iconName="icon" />
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
      default: () => {
        return {
          on: 'chevron-up',
          off: 'chevron-down'
        }
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
    icon () {
      return this.state ? this.stateIcons.on : this.stateIcons.off
    }
  }
}
</script>
