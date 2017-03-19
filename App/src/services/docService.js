import xhr from './xhr/'

/**
 * 对应后端涉及到用户认证的 API
 */
class docService {
    getTopicList(data) {
        return xhr({
            method: 'get',
            url: '/Doc/getTopicList'
        })
    }
}

// 实例化后再导出
export default new docService()