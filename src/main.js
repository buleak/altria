import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './stores'
import Mint from "mint-ui"
import 'mint-ui/lib/style.css'
import Uploader from 'vue-simple-uploader'


Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(Uploader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
