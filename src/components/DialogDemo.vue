<template>
  <section>
    <h2>代码演示</h2>
    <section>
      <h2>示例1</h2>
      <Button @click="toggle">点击显示 Dialog</Button>
      <Dialog v-model:visible="x"/>
      <Button @click="toggle">点击显示 Dialog 并且点击遮罩不关闭</Button>
      <Dialog v-model:visible="x" :closeOnClickOverlay="false"/>
    </section>
    </section>
</template>

<script lang="ts">
import {ref} from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
export default {
  name: "DialogDemo",
  components: {
    Button,
    Dialog
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    }
    return {x, toggle};
  }
}
</script>

<style lang="scss" scoped>

</style>