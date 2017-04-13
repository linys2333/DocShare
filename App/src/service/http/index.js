import axios from 'axios'
import { config } from './config'

const success = (res) => {
    let data = res.body
    if (data && data.success) {
        return data.data
    }
    return fail({ response: res })
}

const fail = (err) => {
    console.error(err)

    if (err.response) {
        let data = err.response.body
        if (data && !data.success) {
            return Promise.reject(data.message)
        }
    }
    return Promise.reject('系统异常')
}

class http {
    get(url) {
        return axios.get(url, config)
            .then(success, fail)
    }

    post(url, data = null) {
        return axios.post(url, data, config)
            .then(success)
            .catch(fail)
    }
}

export default new http()