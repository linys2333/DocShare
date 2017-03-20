const fs = require('fs')
const result = require('./result')

class doc {
    async getTopicList(ctx) {
        let url = `http://${ctx.host}`

        ctx.body = result(true, [{
            id: '01',
            icon: url + '/image/01.png',
            title: '芮瑞讲解项目投资收益产品',
            desc: '芮瑞说项目投资收益产品其实很简单！不信，你来听听看~',
            author: '刘芮瑞',
            docList: [{
                title: '第01讲|项目投资收益产品概览',
                desc: '06:30    0.20M',
                time: 120,
                size: 1024,
                src: url + '/mime/01.mp3'
            }, {
                title: '第02讲|如何支持项目投资收益成果输出',
                desc: '09:00    1.05M',
                time: 120,
                size: 1024,
                src: url + '/mime/01.mp3'
            }]
        }])
    }
}

module.exports = new doc()