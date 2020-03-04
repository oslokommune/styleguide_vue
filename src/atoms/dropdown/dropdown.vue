<template>
  <div class="osg-dropdownfield" :disabled="disabled" >
    <select class="osg-u-text-5 osg-form-component select-form"
      :id="id"
      :name="name"
      :disabled="disabled"
      :required="required">
      <option
        v-for="selectOption in selectOptions" 
        :key="selectOption.value"
        :value="selectOption.value"
      >
        {{selectOption.name}}
      </option>
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
    }
  }
}
</script>
