import xhr from './xhr/'

const path = '/doc'

class docService {
    getTopicList() {
        return xhr.get(`${path}/getTopicList`)
    }
}

export default new docService()