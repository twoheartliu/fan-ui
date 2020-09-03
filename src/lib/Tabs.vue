<template>
   <div>
     Tabs
     <div v-for="(t, index) in titles" :key="index">{{t}}</div>
     <component v-for="(c, index) in defaults" :is="c" :key="index"/>
   </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
export default {
  name: "Tabs",
  setup(props, context) {
    // 虚拟节点 VNode
    const defaults = context.slots.default();
    // 通过检查 defaults 第 N 个的 type 是不是 tab 组件来判断是否符合我们的要求
    // 每一个 vue 的组件最终会导出为一个对象
    defaults.forEach((tag) => {
      if (tag.type !== Tab){
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title;
    })
    return {defaults, titles}
  }
}
</script>

<style lang="scss">

</style>