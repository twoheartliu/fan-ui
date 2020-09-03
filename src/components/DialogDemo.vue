<template>
  <div>
    <h1>
      Dialog 组件
    </h1>
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
            <div>hi</div>
            <div>你好</div>
          </template>
        </Dialog>
      </section>
      <section>
        <h2>示例2</h2>
        <Button @click="showDialog">show</Button>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import {ref, h} from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/showDialog.ts';
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
      return true;
    }
    const clickCancel = () => {}
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      })
    }
    return {x, toggle, clickOk, clickCancel, showDialog};
  }
}
</script>

<style lang="scss" scoped>

</style>