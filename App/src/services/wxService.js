import xhr from './xhr/'

class wxService {
    getToken(data) {
        return xhr.get(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${data.appId}&corpsecret=${data.nonceStr}`)
    }

    getTicket(data) {
        return xhr.get(`https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=${data}`)
    }

    getSignature(data) {
        return xhr.get('/', data)
    }

    getWxUser(data) {
        return xhr.get(`https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${data.token}&code=${data.code}`)
    }

}

export default new wxService()