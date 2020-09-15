<template>
  <label class="osg-checkbox osg-u-text-5">
    <input type="checkbox"
      :disabled="disabled"
      v-model="checkValue"
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
    value: {
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
  },
  computed: {
    checkValue: {
      get () {
        return this.value
      },
      set (updatedValue) {
        this.$emit('input', updatedValue)
      }
    }
  }
}
</script>
