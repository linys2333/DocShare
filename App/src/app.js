// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/'
import router from './routes/router'
import './directives/'
import './filters/'
import FastClick from 'fastclick'
import App from 'COMPONENT/App'

// 微信
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)
    // Vue.wechat.config({
    //     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //     appId: 'wxd20720bef0190a3a', // 必填，公众号的唯一标识
    //     timestamp: '', // 必填，生成签名的时间戳
    //     nonceStr: '', // 必填，生成签名的随机串
    //     signature: '', // 必填，签名，见附录1
    //     jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    // })

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})