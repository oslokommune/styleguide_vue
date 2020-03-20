<template>
  <div class="osg-pagination">
    <button
      class="osg-pagination__item osg-pagination__item--prev"
      :disabled="activeIndex === indexes[0]"
      @click="paginate(activeIndex - 1)"
    >
      <span class="osg-sr-only">Vis forrige side</span>
    </button>
    <template v-for="index in indexes">
      <button
        v-if="showItem(index)"
        class="osg-pagination__item"
        :class="{ 'osg-pagination__item--active': index === activeIndex }"
        :key="index"
        :disabled="index === activeIndex"
        @click="paginate(index)"
      >
        <span class="osg-sr-only">Vis side </span>
        {{ index }}
      </button>
      <span v-else-if="showSpacer(index)" class="osg-pagination__item-spacer" :key="index">
        &hellip;
      </span>
    </template>
    <button
      class="osg-pagination__item osg-pagination__item--next"
      :disabled="activeIndex === indexes[indexes.length - 1]"
      @click="paginate(activeIndex + 1)"
    >
      <span class="osg-sr-only">Vis neste side</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "OsgPagination",
    props: {
      indexes: {
        type: Array,
        required: true
      },
      activeIndex: {
        type: Number,
        required: true
      },
      paginate: {
        type: Function,
        required: true
      },
      limit: {
        type: Number,
        default: 2
      }
    },
    computed: {
      limitMax: function() {
        return this.activeIndex + this.limit;
      },
      limitMin: function() {
        return this.activeIndex - this.limit;
      }
    },
    methods: {
      showItem: function(index) {
        const isFirst = index === 1;
        const isLast = index === this.indexes.length;
        const isWithinLimit = index >= this.limitMin && index <= this.limitMax;
        return isFirst || isLast || isWithinLimit;
      },
      showSpacer: function(index) {
        return index >= this.limitMin - 1 && index <= this.limitMax + 1;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styleguide/src/assets/sass/resources.sass";
  @import "~styleguide/src/molecules/navigation/pagination/pagination.sass";
</style>
