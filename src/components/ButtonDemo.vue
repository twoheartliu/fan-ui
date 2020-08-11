<template>
  <div>
    <h1>Button组件</h1>
    <h2>示例1</h2>
    <Button @click="handleClick" @mouseover="handleClick" @focus="handleClick" size="small">你好</Button>
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