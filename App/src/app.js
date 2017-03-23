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

let config = {
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wxd20720bef0190a3a', // 必填，公众号的唯一标识
    timestamp: '2017-03-23', // 必填，生成签名的时间戳
    nonceStr: '7a777bd0b3f2fe32251c1d747f96c02c', // 必填，生成签名的随机串
    signature: '1234', // 必填，签名，见附录1
    jsApiList: ['startRecord'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
}

// let token = wxService.getToken(config)
// let ticket = wxService.getTicket(token)
// config.signature = ticket
// console.log(token)
// console.log(ticket)

//Vue.wechat.config(config)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})