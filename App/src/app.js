// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { WechatPlugin } from 'vux'
import store from './store/'
import router from './routes/router'
import './directives/'
import './filters/'
import FastClick from 'fastclick'
import App from 'COMPONENT/App'
import { httpHandle } from 'SERVICE/http'
import wxService from 'SERVICE/wxService'

Vue.use(VueRouter)

Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push(httpHandle)

// 微信
Vue.use(WechatPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})