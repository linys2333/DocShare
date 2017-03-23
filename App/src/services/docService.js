import xhr from './xhr/'

class docService {
    getTopicList(data) {
        return xhr.get('/doc/getTopicList')
    }
}

// 实例化后再导出
export default new docService()