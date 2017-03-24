// 不同模块应代码分离
export default [{
    path: '/',
    name: 'Index',
    meta: { passCheck: true },
    component(resolve) {
        require(['VIEW/Index'], resolve)
    }
}, {
    path: '/Auth',
    name: 'Auth',
    meta: { passCheck: true },
    component(resolve) {
        require(['VIEW/Auth'], resolve)
    }
}, {
    path: '/Topic',
    name: 'Topic',
    component(resolve) {
        require(['VIEW/TopicList'], resolve)
    }
}, {
    path: '/Doc',
    name: 'Doc',
    component(resolve) {
        require(['COMPONENT/DocList'], resolve)
    }
}]