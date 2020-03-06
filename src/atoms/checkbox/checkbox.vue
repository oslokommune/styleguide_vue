<template>
  <label class="osg-checkbox osg-u-text-5">
    <input type="checkbox"
      :disabled="disabled"
      :checked="checked"
    >
    <span class="osg-checkbox__checkmark"></span
    ><span class="osg-u-padding-left-3 osg-checkbox__text">
      {{label}}
    </span>
  </label>
</template>

<script>
  export default {
    name: 'OsgVueCheckbox',

    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      checked: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        required: true,
        validator: value => {
          return value !== ''
        }
      }
    }
  }
</script>
