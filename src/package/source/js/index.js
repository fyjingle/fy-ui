import Avatar from './avatar/index.js'
import Button from './button/index.js'
import Icon from './icon/index.js'
import Ripple from './Ripple/index.js'

const components = [
  Avatar,
  Button,
  Icon
]

const install = (Vue) => {
  components.map((component) => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$ripple = Ripple
}

export default {
  install,
  ...components
}
