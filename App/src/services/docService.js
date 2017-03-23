import xhr from './xhr/'

class docService {
    getTopicList(data) {
        return xhr.get('/doc/getTopicList')
    }
}

export default new docService()