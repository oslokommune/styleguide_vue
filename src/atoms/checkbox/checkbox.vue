<template>
  <label class="osg-checkbox osg-u-text-5">
    <input type="checkbox"
      :disabled="disabled"
      :checked="checked"
      v-bind="dataAttrs"
    >
    <span class="osg-checkbox__checkmark"></span
    ><span class="osg-u-padding-left-3 osg-checkbox__text">
      <slot />
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
      dataAttrs: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
