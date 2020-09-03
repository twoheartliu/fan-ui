declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
declare module '*.svg' {
  const src: string
  const VueComponent: SVGElement

  export { VueComponent }
  export default src
}
