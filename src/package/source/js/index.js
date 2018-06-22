import Button from './button/index.js'

const components = [
  Button
]

const install = (Vue) => {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  ...components
}
