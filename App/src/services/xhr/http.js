import Vue from 'vue'
import { rootPath, errHandler } from './config'

const before = (url) => {
    return url.indexOf('http') == 0 ? url : rootPath + url
}

const success = (res) => {
    let data = res.body
    if (data && data.success) {
        return data.data
    } else {
        return data.message
    }
}

const fail = (res) => {
    errHandler(res)
    return res.body
}

class xhr {
    get(url, data = null) {
        url = before(url)
        return Vue.http.get(url)
            .then(success, fail)
    }

    post(url, data = null) {
        url = before(url)
        return Vue.http.post(url, data)
            .then(success, fail)
    }
}

export default new xhr()