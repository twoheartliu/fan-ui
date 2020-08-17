<template>
  <button
      class="fan-switch"
      @click="toggle"
      :class="classes"
      :loading="loading"
  >
    <span>
      <span v-if="loading" class="fan-loadingIndicator"></span>
    </span>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';

export default {
  name: 'Switch',
  props: {
    value: Boolean,
    size: {
      type: String,
      default: 'normal'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const {size} = props;
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    const classes = computed(() => {
      return {
        [`fan-size-${size}`]: size,
        'fan-checked': props.value
      };
    });
    return {toggle, classes};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$blue: #40a9ff;
$grey: grey;
.fan-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h / 2;
  position: relative;
  vertical-align: middle;
  &.fan-size-small {
    height: $h * 0.8;
    width: $h * 2 * 0.8;
    border-radius: $h / 2 * 0.8;
    span {
      height: $h2 * 0.8;
      width: $h2 * 0.8;
      border-radius: $h2 / 2 * 0.8;
    }
    &.fan-checked {
      > span {
        left: calc(100% - #{$h2 * 0.8} - 2px);
      }

      &:active {
        > span {
          width: $h2 * 0.8 + 4px;
        }
      }
    }
  }

  &.fan-size-big {
    height: $h * 1.2;
    width: $h * 2 * 1.2;
    border-radius: $h / 2 * 1.2;
    span {
      height: $h2 * 1.2;
      width: $h2 * 1.2;
      border-radius: $h2 / 2 * 1.2;
    }
    &.fan-checked {
      > span {
        left: calc(100% - #{$h2 * 1.2} - 2px);
      }

      &:active {
        > span {
          width: $h2 * 1.2 + 4px;
        }
      }
    }
  }

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &.fan-checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }

    &:active {
      > span {
        width: $h2 + 4px;
        margin-left: -4px;
      }
    }
  }

  &.size {
    border: 1px solid red;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
    background: #AFD4FF;
  }

  &[loading=true] {
    cursor: not-allowed;
    &.fan-checked {
      .fan-loadingIndicator {
        border-color: $blue $blue $blue transparent;
      }
    }
    .fan-loadingIndicator {
      width: 14px;
      height: 14px;
      display: inline-block;
      margin-right: 4px;
      border-radius: 8px;
      border-color: $grey $grey $grey transparent;
      border-style: solid;
      border-width: 2px;
      animation: fan-spin 1s infinite linear;
    }
  }

  & + & {
    margin-left: 8px;
  }
}
@keyframes fan-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>