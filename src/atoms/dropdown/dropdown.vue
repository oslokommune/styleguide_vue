<template>
  <div class="osg-dropdownfield">
    <select id="id" class="osg-u-text-5 osg-form-component select-form">
      <option
        v-for="selectOption in selectOptions" 
        :key="selectOption.value"
        value="selectOption.value"
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
        type: String,
        default: 'dropdown-select'
      },
      selectOptions: {
        type: Array
      }
    }
  }
</script>
