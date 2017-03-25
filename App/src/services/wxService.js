import xhr from './xhr/'

const path = '/wechat'

class wxService {
    init() {
        return xhr.get(`${path}/initWx`)
    }

    getUser(code) {
        return xhr.get(`${path}/getUser?code=${code}`)
    }

    getSignature(config) {
        return xhr.post(`${path}/getSignature`, config)
    }
}

export default new wxService()