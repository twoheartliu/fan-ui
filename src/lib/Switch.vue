<template>
  <button class="fan-switch" @click="toggle" :class="{'fan-checked': value, size: small}" :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Switch',
  props: {
    value: Boolean,
    disabled: Boolean,
    small: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.fan-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h / 2;
  position: relative;

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

  &:disabled {
    cursor: not-allowed;
    background: #AFD4FF;
  }
}
</style>