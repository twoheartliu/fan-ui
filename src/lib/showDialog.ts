import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = (option) => {
  const { title, content, ok, cancel } = option
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              close()
            }
          },
          ok,
          cancel
        },
        {
          title,
          content
        }
      )
    }
  })
  app.mount(div)
}
