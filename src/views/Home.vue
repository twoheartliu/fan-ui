<template>
  <div class="home">
    <div class="navAndBanner">
      <TopNav/>
      <div class="banner">
        <h1>Fan UI</h1>
        <h2>一个简洁的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/twoheartliu/fan-ui">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-vue"/>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-typescript"/>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-light"/>
      </svg>
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
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.navAndBanner {
  background: rgb(227, 255, 253);
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>