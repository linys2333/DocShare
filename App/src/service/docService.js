import http from './http/'

const path = '/doc'

class docService {
    getTopicList() {
        return http.get(`${path}/getTopicList`)
    }
}

export default new docService()