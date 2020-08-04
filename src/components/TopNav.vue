<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TopNav'
};
</script>

<style scoped lang="scss">
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