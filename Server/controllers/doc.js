const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const result = require('./result')

// 取数
let getTopics = (ctx) => {
    let url = `http://${ctx.host}`
    let dataPath = path.join(__dirname, './../Data/Topic/')
    let staticPath = path.join(__dirname, './../static/')
    let topics = []

    fs.readdirSync(dataPath)
        .forEach((file) => {
            let data = fs.readFileSync(dataPath + file)
            topics.push(JSON.parse(data))
        })

    _.forEach(topics, (val) => {
        val.src = `${url}/image/${val.id}.${val.icon}`

        _.forEach(val.docList, (doc) => {
            let src = `media/${val.id}.${doc.id}.${doc.type}`
            let state = fs.statSync(staticPath + src)

            doc.src = `${url}/${src}`
            doc.time = ''
            doc.size = `${Math.floor(state.size / 1024 / 1024 * 100) / 100}M`
        })
        val = _.sortBy(val, ['id'])
    })
    topics = _.sortBy(topics, ['id'])

    return topics
}

class doc {
    async getTopicList(ctx) {
        let topics = getTopics(ctx)

        ctx.body = result(true, topics)
    }
}

module.exports = new doc()