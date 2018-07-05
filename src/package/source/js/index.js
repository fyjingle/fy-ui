import Avatar from './avatar/index.js'
import Button from './button/index.js'
import Icon from './icon/index.js'
import Progress from './progress/index.js'
import Ripple from './Ripple/index.js'

const components = [
  Avatar,
  Button,
  Progress,
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
