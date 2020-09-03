<template>
  <div>
    <h1>Tabs 组件</h1>
    <section>
      <h2>代码演示</h2>
      <section>
        <h2>示例1</h2>
        <Tabs>
          <Tab  title="导航1">内容1</Tab>
          <Tab title="导航2">内容2</Tab>
        </Tabs>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default {
  name: 'TabsDemo',
  components: {
    Tabs,
    Tab
  }
};
</script>

<style lang="scss" scoped>

</style>