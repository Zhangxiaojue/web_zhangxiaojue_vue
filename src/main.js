import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Element Ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// axios
import axios from 'axios'
Vue.use(axios)

// 阻止vue一开始的报错信息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
