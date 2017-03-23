import Vue from 'vue'
import { rootPath, errHandler } from './config'

const urlHandle = (url) => {
    return url.indexOf('http') == 0 ? url : rootPath + url
}

const success = (res) => {
    let data = res.body
    if (data && data.success) {
        return data.data
    }
    return fail(res)
}

const fail = (res) => {
    errHandler(res)

    let data = res.body
    if (data && !data.success) {
        return Promise.reject(data.message)
    }
    return Promise.reject(data)
}

class xhr {
    get(url) {
        return Vue.http.get(urlHandle(url))
            .then(success, fail)
    }

    post(url, data = null) {
        return Vue.http.post(urlHandle(url), data)
            .then(success, fail)
    }
}

export default new xhr()