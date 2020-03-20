<template>
  <div class="osg-input osg-input-date">
    <label class="osg-input-date__label">
      {{ label }}
      <input
        class="osg-input__input osg-input-date__input"
        :type="type"
        autocomplete="off"
        :aria-invalid="validation && validation.isInvalid"
        :name="inputName"
        :value="value"
        :max="max"
        :min="min"
        :placeholder="placeholder"
        v-on:input="$emit('input', $event.target.value)"
        @focus="onFocusHandler"
      />
      <osg-icon class="osg-input-date__icon" icon-name="calendar" aria-hidden="true" />
    </label>
    <div class="osg-input-validation osg-input-validation--danger osg-u-text-5" v-if="validation && validation.isInvalid">
      {{ validation.message }}
    </div>
  </div>
</template>

<script>
  import OsgVueIcon from "styleguide_vue/src/atoms/icons/icon/icon";

  export default {
    name: "OsgInputDate",
    components: {
      "osg-icon": OsgVueIcon
    },
    props: {
      type: {
        type: String,
        default: "date"
      },
      value: {
        type: String
      },
      label: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        default: "dd.mm.åååå"
      },
      inputName: {
        type: String,
        default: ""
      },
      validation: {
        type: Object
      },
      maxDate: {
        type: Date
      },
      minDate: {
        type: Date
      },
      onFocus: {
        type: Function,
        default: () => {}
      }
    },
    computed: {
      max: function() {
        return this.formatDateObjToIso(this.maxDate);
      },
      min: function() {
        return this.formatDateObjToIso(this.minDate);
      },
      isInvalid: function() {
        return this.validation && !!this.validation.isValid;
      }
    },
    methods: {
      formatDateObjToIso: date => {
        const day = `${date.getDate()}`.padStart(2, "0");
        const month = `${date.getMonth() + 1}`.padStart(2, "0");
        return `${date.getFullYear()}-${month}-${day}`;
      },
      onFocusHandler: function(event) {
        return this.onFocus(event);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~styleguide/src/assets/sass/resources.sass";
  @import "~styleguide/src/molecules/forms/input_date/input_date.sass";
</style>
