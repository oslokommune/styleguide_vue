<template>
  <div class="osg-input osg-input-datepicker" :class="{ 'osg-input-datepicker--is-open': isDatepickerOpen }">
    <osg-input-date
      :label="label"
      type="text"
      v-model="inputValue"
      :min-date="minDate"
      :max-date="maxDate"
      :validation="validation"
      :on-focus="onDatepickerOpen"
    />
    <nrk-core-datepicker
      class="osg-input-datepicker__datepicker"
      ref="datepicker"
      v-show="isDatepickerOpen"
      days="m,t,o,t,f,l,s"
    >
      <fieldset class="osg-input-datepicker__datepicker-nav">
        <button
          class="osg-input-datepicker__datepicker-nav-button osg-input-datepicker__datepicker-nav-button--prev"
          :value="datepickerPaginateMonth(-1)"
          :disabled="datepickerPaginateMonthDisabled(-1)"
          aria-label="Forrige måned"
        >
          <osg-icon
            class="osg-input-datepicker__datepicker-nav-icon"
            icon-name="chevron-thin-down"
            aria-hidden="true"
          />
        </button>
        <button
          class="osg-input-datepicker__datepicker-nav-button osg-input-datepicker__datepicker-nav-button--next"
          :value="datepickerPaginateMonth(+1)"
          :disabled="datepickerPaginateMonthDisabled(+1)"
          aria-label="Neste måned"
        >
          <osg-icon
            class="osg-input-datepicker__datepicker-nav-icon"
            icon-name="chevron-thin-up"
            aria-hidden="true"
          />
        </button>
      </fieldset>
      <table class="osg-input-datepicker__datepicker-calendar"></table>
    </nrk-core-datepicker>
  </div>
</template>

<script>
import OsgInputDate from 'styleguide_vue/src/molecules/forms/input_date/InputDate'
import OsgVueIcon from 'styleguide_vue/src/atoms/icons/icon/icon'
import CoreDatepicker from '@nrk/core-datepicker'
window.customElements.define('nrk-core-datepicker', CoreDatepicker)

export default {
  name: 'OsgInputDatepicker',
  components: {
    OsgInputDate,
    'osg-icon': OsgVueIcon
  },
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'dd.mm.åååå'
    },
    inputName: {
      type: String,
      default: ''
    },
    validation: {
      type: Object
    },
    maxDate: {
      type: Date
    },
    minDate: {
      type: Date
    }
  },
  data: function () {
    return {
      datepicker: null,
      datepickerDate: new Date(Date.now()),
      isDatepickerOpen: false
    }
  },
  mounted: function () {
    this.datepicker = this.$refs.datepicker
    this.datepicker.disabled = date => {
      return (
        (this.maxDate && date > this.maxDate.setHours(23, 59, 59, 999)) ||
          (this.minDate && date < this.minDate)
      )
    }
    this.datepicker.addEventListener('datepicker.change', this.onDatepickerChange)
    this.datepicker.addEventListener('datepicker.click.day', this.onDatepickerClickDay)
    window.addEventListener('click', this.onDatepickerOutside)
    window.addEventListener('keyup', this.onDatepickerOutside)
  },
  destroyed: function () {
    this.datepicker.removeEventListener('datepicker.change', this.onDatepickerChange)
    this.datepicker.removeEventListener('datepicker.click.day', this.onDatepickerClickDay)
    window.removeEventListener('click', this.onDatepickerOutside)
    window.removeEventListener('keyup', this.onDatepickerOutside)
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (inputValue) {
        this.$emit('input', inputValue)
      }
    }
  },
  methods: {
    onDatepickerOpen: function () {
      this.isDatepickerOpen = true
    },
    onDatepickerClose: function () {
      this.isDatepickerOpen = false
    },
    onDatepickerOutside: function (event) {
      if (!this.$el.contains(event.target)) {
        this.isDatepickerOpen = false
      }
    },
    onDatepickerChange: function (event) {
      this.datepickerDate = event.detail
    },
    onDatepickerClickDay: function () {
      this.$emit(
        'input',
          `${this.datepicker.day}.${this.datepicker.month}.${this.datepicker.year}`
      )
      this.onDatepickerClose()
    },
    datepickerPaginateMonth: function (step) {
      if (this.datepicker) {
        const next = new Date(this.datepickerDate).setMonth(this.datepickerDate.getMonth() + step)
        return Math.max(
          this.minDate || 0,
          Math.min(this.maxDate.setHours(23, 59, 59, 999) || Infinity, next)
        )
      }
    },
    datepickerPaginateMonthDisabled: function (step) {
      if (this.datepicker) {
        let next = new Date(this.datepickerDate).setMonth(this.datepickerDate.getMonth() + step)
        next = new Date(next).setDate(1)
        return (step > 0 && next > this.maxDate) || next < this.minDate
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~styleguide/src/assets/sass/resources.sass";

  .osg-input-datepicker {
    position: relative;

    &__label {
      display: block;
      position: relative;
    }

    &__input {
      $icon-padding: $osg-space-2 * 2 + 32px;

      border: 2px solid $osg-color-blue-dark;
      box-sizing: border-box;
      height: 50px;
      outline: none;
      padding: $osg-space-2 $icon-padding $osg-space-2 $osg-space-2;
      width: 100%;

      &:focus {
        $focus-padding: $osg-space-2 - 2px;

        border-width: 4px;
        padding: $focus-padding $icon-padding - 2px $focus-padding $focus-padding;
      }

      &:focus,
      &:hover {
        border-color: $osg-color-blue-hover;
      }

      &[aria-invalid="true"] {
        border-color: $osg-color-red;
      }
    }

    &__icon {
      bottom: $osg-space-2;
      position: absolute;
      right: $osg-space-2;
    }

    &__datepicker {
      $padding: $osg-space-2;

      background-color: $osg-color-white;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      padding: $padding;
      position: absolute;
      width: 290px + ($padding * 2);
      z-index: 99;

      &-nav,
      &-nav-button {
        border: 0 none;
      }

      &-nav-button {
        background-color: transparent;
        margin: 0 $osg-space-1;
        outline: none;
        padding: 0;
        position: absolute;
        top: $osg-space-2;

        &--next {
          right: 0;
        }

        &--prev {
          left: 0;
        }

        &:not(:disabled) {
          cursor: pointer;

          &:focus,
          &:hover {
            color: $osg-color-blue-hover;
          }

          &:focus {
            outline: auto;
          }
        }
      }

      &-nav-icon {
        transform: rotate(90deg);
      }
    }
  }

  /*
   * nrk-core-datepicker styling
   * - Element styles since missing classes on child component
   */
  .osg-input-datepicker__datepicker-calendar ::v-deep {
    caption,
    th {
      font-weight: normal;
    }

    caption {
      margin-bottom: $osg-space-2;
      margin-top: $osg-space-1;
      text-transform: capitalize;
    }

    thead {
      border-bottom: 1px solid $osg-color-blue-dark;
      border-top: 1px solid $osg-color-blue-dark;
    }

    th {
      padding: $osg-space-1 0;
      text-align: center;
      text-transform: capitalize;
    }

    td {
      text-align: center;

      button {
        @include osg-common-button-circle;

        // next/prev month
        &[data-adjacent="true"] {
          font-size: 14px;
        }

        &:not(:disabled) {
          cursor: pointer;
        }

        // today
        &[aria-current="date"] {
          background-color: $osg-color-beige;
        }

        // selected
        &[autofocus] {
          background-color: $osg-color-blue-dark;
          color: $osg-color-white;

          &:focus,
          &:hover {
            background-color: $osg-color-blue-hover;
            color: $osg-color-white;
          }
        }

        &:disabled {
          color: $osg-color-disabled;
        }
      }
    }
  }
</style>
