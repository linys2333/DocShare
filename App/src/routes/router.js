import VueRouter from 'vue-router'
import routesMap from './map/routesMap'

const router = new VueRouter({
    routes: routesMap,
    mode: 'history',
    scrollBehavior: function(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
})

// 权限拦截
router.beforeEach((to, from, next) => {
    let passCheck = to.matched.some(record => record.meta.passCheck)
    if (!passCheck) {
        let wx = JSON.parse(sessionStorage.wxInfo)
        if (!wx || !wx.code || !wx.userId) {
            next('/Auth')
        }
    }
    next()
})

export default router