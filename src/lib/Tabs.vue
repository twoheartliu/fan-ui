<template>
  <div class="fan-tabs">
    <div class="fan-tabs-nav">
      <div
          class="fan-tabs-nav-item"
          @click="select(t)"
          v-for="(t, index) in titles"
          :class="{selected: t === selected}"
          :key="index">
        {{ t }}
      </div>
    </div>
    <div class="fan-tabs-content">
      <component
          class="fan-tabs-content-item"
          :is="current"
          :key="selected"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue';
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    // 虚拟节点 VNode
    const defaults = context.slots.default();
    // 通过检查 defaults 第 N 个的 type 是不是 tab 组件来判断是否符合我们的要求
    // 每一个 vue 的组件最终会导出为一个对象
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });

    const current = (c) => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    };

    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title: string) => {
      context.emit('update:selected', title);
    };

    return {defaults, titles, current, select};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.fan-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}

</style>