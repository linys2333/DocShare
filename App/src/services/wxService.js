import xhr from './xhr/'

class wxService {
    getToken(data) {
        return xhr.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${data.appId}&secret=${data.nonceStr}`)
    }

    getTicket(data) {
        return xhr.get(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${data}&type=jsapi`)
    }
}

export default new wxService()