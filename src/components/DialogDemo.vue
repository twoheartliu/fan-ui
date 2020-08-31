<template>
  <section>
    <h2>代码演示</h2>
    <section>
      <h2>示例1</h2>
      <Button @click="toggle">点击显示 Dialog 并且点击遮罩不关闭</Button>
      <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="clickOk" :cancel="clickCancel">
        <template v-slot:title >
          <strong>加粗的标题</strong>
        </template>
        <template v-slot:content >
          <div>title</div>
          <div>你好</div>
        </template>
      </Dialog>
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
    const clickOk = () => {
      return false;
    }
    const clickCancel = () => {}
    return {x, toggle, clickOk, clickCancel};
  }
}
</script>

<style lang="scss" scoped>

</style>