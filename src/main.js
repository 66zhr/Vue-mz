// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/style.css"
import store from "./store"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './module/filter'
import bus from './module/bus'
import directive from './module/directive'


Vue.config.productionTip = false

Vue.use(MintUI);
import axios from "axios";
Vue.prototype.$http=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data:{
    bus
  },
  components: { App },
  template: '<App/>'
})
