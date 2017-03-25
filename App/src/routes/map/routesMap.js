// 不同模块应代码分离
export default [{
    path: '/',
    name: 'Auth',
    meta: { passCheck: true },
    alias: '/Auth',
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