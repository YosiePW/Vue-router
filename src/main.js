import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'


Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path : '/', component : Home},
    { path : '/about', component : About},
    { path : '/contact', component : Contact},
    { path : '*', component : NotFound},
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
