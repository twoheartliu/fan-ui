<template>
  <div class="topNav">
    <div class="logo" @click="toggleAside">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      toggleAside
    }
  }
};
</script>

<style scoped lang="scss">
.topNav {
  background: #acdae5;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;

  > .logo {
    min-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;

    > li {
      margin: 0 1em;
    }
  }
}
</style>