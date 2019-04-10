import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faKey, faLayerGroup, faSyncAlt, faTasks, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faKey, faStar, faLayerGroup, faSyncAlt, faTasks, faLaptopCode)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
