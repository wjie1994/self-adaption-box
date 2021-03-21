import Vue from 'vue'
import App from './App.vue'

import SelfAdaptionBox from './index'

Vue.config.productionTip = false

Vue.use(SelfAdaptionBox)

new Vue({
  render: h => h(App)
}).$mount('#app')
