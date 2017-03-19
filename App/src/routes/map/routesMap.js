// 不同模块应代码分离
export default [{
    path: '/',
    name: 'Index',
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