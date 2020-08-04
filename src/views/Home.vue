<template>
  <div>
    <div class="topNav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>FAN UI</h1>
      <h2>一个简洁的 UI 框架</h2>
      <p class="sections">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
  .topNav {
    background: #acdae5;
    display: flex;
    padding: 16px;
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