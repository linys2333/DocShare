import wxService from 'SERVICE/wxService'

import {
    wxConfig
} from './../config'

const state = {}

const getters = {}

const actions = {
    // 初始化
    init({ commit }) {
        return wxService.init()
    },

    // 获取成员信息
    getWxUser({ commit }, code) {
        return wxService.getUser(code)
    },

    // 获取签名
    getSignature({ commit }) {
        let config = {
            timestamp: wxConfig.timestamp,
            nonceStr: wxConfig.nonceStr
        }
        return wxService.getSignature(config)
            .then((signature) => {
                wxConfig.signature = signature
                return wxConfig
            })
    }
}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}