import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior() { // svaki put kad se neka komponenta loada, počinje od navigacije, tj. otpočetka
    return {
      x: 0,
      y: 0
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
