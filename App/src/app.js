// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { WechatPlugin } from 'vux'
import FastClick from 'fastclick'
import store from './store/'
import router from './router/'
import App from 'COMPONENT/App'
import './directives/'
import './filters/'
import 'SERVICE/http/init'

FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(WechatPlugin)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})