<template>
  <div
    class="osg-expand-box"
    :class="[{ 'osg-v-open': isExpanded }]"
  >
    <div class="osg-expand-box__title-line">
      <div class="osg-expand-box__title-line-text">
        <slot name="title" />
      </div>
      <osg-vue-button
        :on-click="() => $emit('toggleState')"
        :is-circle="true"
        color="yellow"
        :attrs="buttonAttrs"
      >
        <osg-vue-icon :iconName="iconName" />
      </osg-vue-button>
    </div>
    <div
      class="osg-expand-box__content"
      :id="id"
    >
      <div class="osg-content-box osg-v-default ">
        <div class="osg-content-box__container">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import OsgVueButton from '../../../atoms/buttons/button/button'
  import OsgVueIcon from '../../../atoms/icons/icon/icon'
  import {generateUuid} from '../../../mixins/generateUuid.js'

  export default {
    name: 'OsgVueExpandBox',

    components: {
      OsgVueButton,
      OsgVueIcon
    },

    mixins: [generateUuid],

    props: {
      icons: {
        type: Object,
        default: {
          expanded: 'chevron-up',
          collapsed: 'chevron-down'
        },
        required: true
      },

      isExpanded: {
        type: Boolean,
        required: false
      },

      buttonAriaLabel: {
        type: String,
        required: true
      }
    },

    data: () => ({
      id: null
    }),

    computed: {
      iconName() {
        return this.isExpanded ? this.icons.expanded : this.icons.collapsed
      },

      buttonAttrs() {
        return {
          'aria-controls': this.id,
          'aria-expanded': this.isExpanded + '',
          'aria-label': this.buttonAriaLabel
        }
      }
    },

    mounted() {
      this.id = this.generateUuid()
    }
  }
</script>
