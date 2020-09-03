<template>
  <div class="fan-tabs">
    <div class="fan-tabs-nav" ref="container">
      <div
          class="fan-tabs-nav-item"
          @click="select(t)"
          v-for="(t, index) in titles"
          :ref="el => { if(t === selected) selectedItem = el }"
          :class="{selected: t === selected}"
          :key="index">
        {{ t }}
      </div>
      <div class="fan-tabs-nav-indicator" ref="indicator"></div>
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

import {computed, ref, onMounted, watchEffect} from 'vue';
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    // 挂载后再进行监听
    onMounted(() => {
      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {
          left: left1
        } = container.value.getBoundingClientRect();
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      })
    })

    // 虚拟节点 VNode
    const defaults = context.slots.default();
    // 通过检查 defaults 第 N 个的 type 是不是 tab 组件来判断是否符合我们的要求
    // 每一个 vue 的组件最终会导出为一个对象
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });

    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });


    const titles = defaults.map((tag) => {
      return tag.props.title;
    });

    const select = (title: string) => {
      context.emit('update:selected', title);
    };

    return {defaults, titles, current, select, selectedItem, indicator, container};
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}

</style>