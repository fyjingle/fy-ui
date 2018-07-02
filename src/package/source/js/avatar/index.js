import Avatar from './avatar.vue'

Avatar.install = (Vue) => {
  Vue.component(Avatar.name, Avatar)
}

export default Avatar
