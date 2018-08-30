import Vue from 'vue'
// import Login from './Login.vue'
import elementui from 'element-ui'
import APP from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Table from './components/Table'
import Form from './components/Form'

Vue.config.productionTip = false
Vue.use(elementui)
Vue.use(VueRouter)

const routes = [
  { path: '/table', component: Table },
  { path: '/form', component: Form }
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(APP)
}).$mount('#app')
