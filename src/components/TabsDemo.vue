<template>
  <div>
    <h1>Tabs 组件</h1>
    <section>
      <h2>代码演示</h2>
      <section>
        <h2>示例1</h2>
        <Tabs v-model:selected="x">
          <Tab title="导航1">内容1</Tab>
          <Tab title="导航22222">内容2</Tab>
        </Tabs>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';


export default {
  name: 'TabsDemo',
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('导航22222');
    return {x}
  }
};
</script>

<style lang="scss" scoped>

</style>