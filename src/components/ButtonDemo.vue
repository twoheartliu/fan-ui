<template>
  <div>
    <h1>Button组件</h1>
    <h2>示例1</h2>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
    <h2>示例2</h2>
    <Button theme="button" size="small">小</Button>
    <Button theme="button" size="normal">中</Button>
    <Button theme="button" size="big">大</Button>
    <br>
    <Button theme="link" size="small">小</Button>
    <Button theme="link" size="normal">中</Button>
    <Button theme="link" size="big">大</Button>
    <br>
    <Button theme="text" size="small">小</Button>
    <Button theme="text" size="normal">中</Button>
    <Button theme="text" size="big">大</Button>
    <h2>示例3</h2>
    <Button theme="button" level="main">你好</Button>
    <Button theme="button" level="normal">你好</Button>
    <Button theme="button" level="danger">你好</Button>
    <br>
    <Button theme="link" level="main">你好</Button>
    <Button theme="link" level="normal">你好</Button>
    <Button theme="link" level="danger">你好</Button>
    <br>
    <Button theme="text" level="main">你好</Button>
    <Button theme="text" level="normal">你好</Button>
    <Button theme="text" level="danger">你好</Button>
    <h2>示例4</h2>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
    <h2>示例5</h2>
    <Button loading>loading按钮</Button>
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