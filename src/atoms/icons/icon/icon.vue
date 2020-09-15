<template>
  <span class="osg-icon" :class="`osg-icon--${iconName}`" aria-hidden="true"></span>
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
