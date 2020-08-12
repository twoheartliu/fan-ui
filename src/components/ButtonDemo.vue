<template>
  <div>
    <h1>Button组件</h1>
    <h2>示例1</h2>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const handleClick = () => {
      console.log('buttonClick');
    };
    return {handleClick};
  }
};
</script>

<style lang="scss" scoped>

</style>