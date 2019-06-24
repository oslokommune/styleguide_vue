<template>
  <i :class="'osg-u-icon-' + iconName"></i>
</template>

<script>
  export default {
    name: 'OsgVueIcon',

    props: {
      iconName: {
        type: String,
        default: 'chevron-right',
        required: false
      }
    }
  }
</script>
