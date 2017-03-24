import wxService from 'SERVICE/wxService'

const state = {
    token: '',
    ticket: ''
}

const getters = {
    token: state => state.token,
    ticket: state => state.ticket
}

const actions = {
    // 初始化
    init({ commit }, wxConfig) {
        wxService.getToken(wxConfig)
            .then((token) => {
                commit('setToken', token.access_token)

                wxService.getTicket(token.access_token)
                    .then((ticket) => {
                        commit('setTicket', ticket.ticket)
                    })
            })
    },

    // 获取成员信息
    getWxUser({ state }, code) {
        return wxService.getWxUser({
            code,
            token: state.token
        })
    },

    // 获取签名    
    getSignature({ state }, wxConfig) {
        return wxService.getSignature(wxConfig)
    }
}

const mutations = {
    setToken(state, data) {
        state.token = data
    },

    setTicket(state, data) {
        state.ticket = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}