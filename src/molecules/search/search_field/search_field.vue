<template>
  <div class="osg-searchfield" :class="iconPositionClass">
    <label>
      <span class="osg-sr-only">{{label}}</span>
      <input
        class="osg-searchfield__input osg-u-text-5 osg-form-component"
        type="search"
        :autocomplete="autocompleteString"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
      <osg-vue-icon
        v-if="validIconPosition"
        iconName="magnifying-glass-small"
        class="osg-searchfield__icon"
      />
    </label>
  </div>
</template>

<script>
import OsgVueIcon from '../../../atoms/icons/icon/icon'

export default {
  name: 'OsgVueSearchField',

  components: {
    OsgVueIcon
  },

  props: {
    iconPosition: {
      type: String,
      default: "",
      validator: value => {
        return ['right', 'left', ''].includes(value);
      }
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String
    },
    name: {
      type: String
    },
    label: {
      type: String,
      required: true,
      validator: value => {
        return value !== ''
      }
    },
    autocomplete: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    iconPositionClass: function() {
      return `osg-searchfield--${this.iconPosition}`
    },
    autocompleteString: function() {
      return this.autocomplete ? 'on' : 'off'
    },
    validIconPosition: function() {
      return this.iconPosition == 'left' || this.iconPosition == 'right'
    }
  }
}
</script>
