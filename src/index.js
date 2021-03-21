import SelfAdaptionBox from '@/components/SelfAdaptionBox'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component(SelfAdaptionBox.name, SelfAdaptionBox)
}

export {
  SelfAdaptionBox
}

export default {
  install
}
