<template>
  <div>
    <TopNav />
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
import TopNav from '../components/TopNav.vue';
export default {
  name: 'Home',
  components: {
    TopNav
  }
};
</script>

<style lang="scss" scoped>

</style>