import Vue from 'vue'
import rippleComponent from './ripple.vue'

let RippleConstructor = Vue.extend(rippleComponent)

let instance

let ripple = (option) => {
  instance = new RippleConstructor({
    data: {
      option: option
    }
  })

  instance.$mount()
  option.el.appendChild(instance.$el)
  return instance
}

export default ripple
