import http from './http/'

const path = '/wechat'

class wxService {
    init() {
        return http.get(`${path}/initWx`)
    }

    getUser(code) {
        return http.get(`${path}/getUser?code=${code}`)
    }

    getSignature(config) {
        return http.post(`${path}/getSignature`, config)
    }
}

export default new wxService()