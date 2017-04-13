import wxService from 'SERVICE/wxService'

import {
    wxconfig
} from '@/config'

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
            timestamp: wxconfig.timestamp,
            nonceStr: wxconfig.nonceStr
        }
        return wxService.getSignature(config)
            .then((signature) => {
                wxconfig.signature = signature
                return wxconfig
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