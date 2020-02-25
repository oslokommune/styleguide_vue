<template>
  <div class="osg-searchfield" :class="'osg-searchfield--'+stateIcons">
    <input
      class="osg-searchfield__input osg-u-text-5 osg-form-component"
      :id="id"
      :name="name"
      type="text"
      :placeholder="placeholder"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"/>
    <osg-vue-icon v-if="stateIcons"
      :iconName="'magnifying-glass-small'"
      class="osg-searchfield__icon"/>

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
      stateIcons: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ""
      },
      placeholder: {
        type: String,
        default: 'Søk her'
      },
      name: {
        type: String,
        default: 'Search field'
      },
      id: {
        type: String,
        default: 'Search field'
      }
    }
  }
</script>
