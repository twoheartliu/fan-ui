<template>
  <h1>Switch 开关</h1>
  <p>开关选择器。</p>
  <section>
    <h2>何时使用</h2>
    <ul>
      <li>需要表示开关状态/两种状态之间的切换时；</li>
      <li>和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li>
    </ul>
  </section>
  <section>
    <h2>代码演示</h2>
    <section>
      <p>基本</p>
      <Switch v-model:value="bool"/>
    </section>
    <section>
      <p>禁用</p>
      <Switch v-model:value="bool" :disabled="true" />
    </section>
    <section>
      <p>两种大小</p>
      <Switch v-model:value="bool" :size="small"/>
      <Switch v-model:value="bool" />
    </section>
  </section>
</template>

<script lang="ts">
import {ref} from 'vue';
import Switch from '../lib/Switch.vue';
import './demo.scss';

export default {
  name: 'SwitchDemo',
  components: {
    Switch
  },
  setup() {
    const bool = ref(true);
    const small = ref(true);
    return {bool, small};
  }
};
</script>

<style lang="scss" scoped>

</style>