<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fan"/>
      </svg>
      Fan UI
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <span class="toggleAside" @click="toggleAside">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-menu"/>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {
      toggleAside,
    };
  },
};
</script>

<style scoped lang="scss">
$color: #007974;

.topNav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  > .logo {
    min-width: 6em;
    margin-right: auto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    > svg {
      width: 32px;
      height: 32px;
    }

    &:hover {
      border: none;
    }
  }

  > .menu {
    display: flex;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    justify-content: center;
    align-items: center;
  }

  @media screen and(max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: flex;
    }
  }
}
</style>
