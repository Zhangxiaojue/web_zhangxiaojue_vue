import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入 Avue
import Avue from '@smallwei/avue'
Vue.use(Avue)
// axios
import axios from 'axios'
Vue.use(Avue, { axios })

// 阻止vue一开始的报错信息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
