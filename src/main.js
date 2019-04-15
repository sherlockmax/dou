import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as fas from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  fas.faKey,
  fas.faStar,
  fas.faLayerGroup,
  fas.faSyncAlt,
  fas.faTasks,
  fas.faLaptopCode,
  fas.faInfoCircle,
  fas.faTrashAlt,
  fas.faPause,
  fas.faPlay
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
