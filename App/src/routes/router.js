import Vue from 'vue'
import VueRouter from 'vue-router'

import routesMap from './map/routesMap' // 路由映射

// 在这里访问不了根组件的 this.$root.userData，但服务照常无障碍访问
// import userService from 'SERVICE/userService'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routesMap,
    mode: 'history'
})


// ========================================
// 中间件
// ========================================
// 简单的路由跳转 Logger
// router.beforeEach((to, from, next) => {
//     console.info(`[RouteLogger] ${decodeURI(from.path)} => ${decodeURI(to.path)}`)
//     next()
// })

// 权限拦截
router.beforeEach((to, from, next) => {
    next()
})

export default router