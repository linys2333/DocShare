const http = require('axios')
const { wxconfig } = require('./../config')
const result = require('./result')
const wxsign = require('./../util/wxsign')
const log = require('./../util/log')

const updateToken = async() => {
    if (!global.wx) {
        global.wx = {}
    }

    let token = await http.get(`https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${wxconfig.corpid}&corpsecret=${wxconfig.corpsecret}`)
    if (token && token.access_token) {
        let ticket = await http.get(`https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=${token.access_token}`)

        if (ticket && ticket.ticket) {
            global.wx.token = token.access_token
            global.wx.ticket = ticket.ticket
            log.info('token和ticket已更新')
        } else {
            log.error(ticket)
        }
    } else {
        log.error(token)
    }
}

class wechat {
    async initWx(ctx) {
        if (global.wx && global.wx.token && global.wx.ticket) {
            ctx.body = result(true, '')
            return
        }

        if (global.refreshWxId) {
            clearInterval(global.refreshWxId)
        }

        await updateToken()

        if (global.wx.token && global.wx.ticket) {
            // 定时更新token和ticket
            global.refreshWxId = setInterval(updateToken, wxconfig.expires_in)

            ctx.body = result(true, '')
        } else {
            ctx.body = result(false, '')
        }
    }

    async getUser(ctx) {
        let user = await http.get(`https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${global.wx.token}&code=${ctx.query.code}`)

        if (user.UserId) {
            ctx.body = result(true, user)
        } else {
            log.error(user)
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