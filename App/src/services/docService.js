import xhr from './xhr/'

class docService {
    getTopicList(data) {
        return xhr({
            method: 'get',
            url: '/doc/getTopicList'
        })
    }
}

// 实例化后再导出
export default new docService()