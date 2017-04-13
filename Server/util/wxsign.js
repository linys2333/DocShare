const crypto = require('crypto')

let raw = (args) => {
    let keys = Object.keys(args)
    keys = keys.sort()

    let newArgs = {}
    keys.forEach((key) => {
        newArgs[key.toLowerCase()] = args[key]
    })

    let str = ''
    for (let k in newArgs) {
        str += '&' + k + '=' + newArgs[k]
    }

    return str.substr(1)
}

/**
 * @synopsis 签名算法 
 *
 * @param jsapi_ticket 用于签名的 jsapi_ticket
 * @param url 用于签名的 url ，注意必须动态获取，不能 hardcode
 *
 * @returns
 */
let sign = (jsapi_ticket, url, wxconfig) => {
    let ret = {
        jsapi_ticket,
        url,
        nonceStr: wxconfig.nonceStr,
        timestamp: wxconfig.timestamp,
    }
    let str = raw(ret)
    let signature = crypto.createHash('sha1')
        .update(str)
        .digest('hex')
    return signature
}

module.exports = sign