<template>
  <div class="osg-searchfield" :class="`osg-searchfield--${iconState}`">
    <label>
      <input
      class="osg-searchfield__input osg-u-text-5 osg-form-component"
      type="search"
      :autocomplete="autocomplete"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"/>
      <osg-vue-icon v-if="iconState"
      iconName="magnifying-glass-small"
      class="osg-searchfield__icon"/>
      <span class="osg-sr-only">{{label}}</span>
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
      iconState: {
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
        type: String,
        default: 'off',
        validator: value => {
          return ['on', 'off'].includes(value);
        }
      }
    }
  }
</script>
