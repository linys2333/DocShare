const fs = require('fs')
const moment = require('moment')
const colors = require('colors')

const handleText = (text) => {
    return `${moment().format()}：${text}`
}

class log {
    info(text) {
        console.log(handleText(text).green)
    }
    warn(text) {
        console.log(handleText(text).yellow)
    }
    error(text) {
        console.log(handleText(text).red)
    }
}

module.exports = new log()