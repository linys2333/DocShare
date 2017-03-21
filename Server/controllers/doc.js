const fs = require('fs')
const _ = require('lodash')
const result = require('./result')

// 取数
let getTopics = () => {
    let url = `http://${ctx.host}`
    let dataPath = './../Data/Topic/'
    let staticPath = './../static/'
    let topics = []

    fs.readdir(dataPath, (err, files) => {
        if (err) {
            return console.error(err)
        }
        files.forEach((file) => {
            fs.open(dataPath + file, 'r+', (err, fd) => {
                if (err) {
                    return console.error(err);
                }
                fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
                    if (err) {
                        return console.error(err);
                    }
                    if (bytes > 0) {
                        topics.push(JSON.parse(buf.slice(0, bytes).toString()))
                    }
                    fs.close(fd)
                })
            })
        })
    })

    _.forEach(topics, (val) => {
        val.src = `/image/${val.id}.${val.icon}`

        _.forEach(val.docList, (doc) => {
            doc.src = `/mime/${val.id}.${doc.id}.${doc.type}`
            doc.time = ''
            doc.size = ''
        })
    })

    return topics
}

class doc {
    async getTopicList(ctx) {
        let topics = getTopics()

        ctx.body = result(true, topics)
    }
}

module.exports = new doc()