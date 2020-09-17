<template>
  <div class="osg-dropdownfield" :disabled="disabled" >
    <select class="osg-u-text-5 osg-form-component"
      :id="id"
      :name="name"
      :disabled="disabled"
      :required="required"
      v-model="selectValue"
    >
      <slot>
        <option
          v-for="selectOption in selectOptions"
          :key="selectOption.value"
          :value="selectOption.value"
        >
          {{selectOption.name}}
        </option>
      </slot>
    </select>
  </div>
</template>

<script>
export default {
  name: 'OsgVueDropdown',
  props: {
    id: {
      type: String
    },
    selectOptions: {
      type: Array
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  computed: {
    selectValue: {
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
