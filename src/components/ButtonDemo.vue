<template>
  <div>
    <h1>Button组件</h1>
    <p>按钮用于开始一个即时操作。</p>
    <section>
      <h2>何时使用</h2>
      <ul>
        <li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
        <li>默认按钮：用于没有主次之分的一组行动点。</li>
        <li>文本按钮：用于最次级的行动点。</li>
        <li>链接按钮：用于作为外链的行动点。</li>
      </ul>
      <h2>
        以及两种状态属性与上面配合使用。
      </h2>
      <ul>
        <li>禁用：行动点不可用的时候，一般需要文案解释。</li>
        <li>加载中：用于异步操作等待反馈的时候，也可以避免多次提交。</li>
      </ul>
    </section>
    <section>
      <h2>代码演示</h2>
      <section>
        <p>theme</p>
        <Button theme="button">button</Button>
        <Button theme="link">link</Button>
        <Button theme="text">text</Button>
      </section>
      <section>
        <p>size</p>
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
      </section>
      <section>
        <p>level</p>
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
      </section>
      <section>
        <p>disabled</p>
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用链接按钮</Button>
        <Button theme="text" disabled>禁用文本按钮</Button>
      </section>
      <section>
        <p>loading</p>
        <Button>未加载</Button>
        <Button loading>加载中</Button>
        <Button>加载完成</Button>
      </section>
    </section>
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