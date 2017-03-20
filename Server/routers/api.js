const router = require('koa-router')()

const docController = require('./../controllers/doc')

const routers = router
    .get('/doc/getTopicList', docController.getTopicList)

module.exports = routers