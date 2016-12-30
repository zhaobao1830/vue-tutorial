// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime.vue'
import NotFound from './components/404'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'



Vue.use(VueRouter)
Vue.use(VueResource)

const routes=[{
  path : '/',
  component : Home
},
  {
    path: '/home',
    component: Home
  },
  {
    path: '/time-entries',
    component:TimeEntries,
    children:[{
      path: 'log-time',
      //懒加载
      component : LogTime
    }]
  },
  {
    path : '*',
    component : NotFound
  }
]

const router=new VueRouter({
  routes
})
/* eslint-disable no-new */
//实例化vue
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
