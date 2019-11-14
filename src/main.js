import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/cssreset.css'
import './assets/font/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueRouter from 'vue-router'
import Mint from 'mint-ui';
import mint from '../node_modules/mint-ui/lib/style.css';
import router from './assets/js/router.js'
import axios from 'axios'
import $ from 'jquery'
Vue.prototype.$http=axios
Vue.use(VueRouter)
Vue.use(Mint);
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
