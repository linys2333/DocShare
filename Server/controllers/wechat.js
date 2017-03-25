const request = require('sync-request')
const config = require('./wxconfig')
const result = require('./result')
const wxsign = require('./../utils/wxsign')
const log = require('./../utils/log')

const wxrequest = (url) => {
    let res = request('get', url)
    return JSON.parse(res.getBody().toString())
}

const updateToken = () => {
    if (!global.wx) {
        global.wx = {}
    }

    let token = wxrequest(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${config.corpid}&corpsecret=${config.corpsecret}`)
    if (token && token.access_token) {
        let ticket = wxrequest(`https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=${token.access_token}`)

        if (ticket && ticket.ticket) {
            global.wx.token = token.access_token
            global.wx.ticket = ticket.ticket
            log.info('token和ticket已更新')
        }
    }
}

class wechat {
    async initWx(ctx) {
        updateToken()

        if (global.wx.token && global.wx.ticket) {
            // 定时更新token和ticket
            setInterval(updateToken, config.expires_in)

            ctx.body = result(true, '')
        } else {
            ctx.body = result(false, '')
        }
    }

    async getUser(ctx) {
        let user = wxrequest(`https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${global.wx.token}&code=${ctx.query.code}`)

        if (user.UserId) {
            // 定时更新token和ticket
            setInterval(updateToken, config.expires_in)
            ctx.body = result(true, user)
        } else {
            ctx.body = result(false, "")
        }
    }

    async getSignature(ctx) {
        let url = ctx.headers.referer.split('#')[0]
        let signature = wxsign(global.wx.ticket, url, ctx.request.body)

        ctx.body = result(true, signature)
    }
}

module.exports = new wechat()