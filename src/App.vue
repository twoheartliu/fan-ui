<template>
  <div>导航栏
  |
  <router-link to="/">Home</router-link>
  |
  <router-link to="/haha2">Haha2</router-link>
  </div>
  <hr>
  <router-view />
</template>

<script>
import Haha from './components/Haha.vue';
export default {
  name: 'App',
  components: {
    Haha
  }
}
</script>
