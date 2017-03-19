import userService from 'SERVICE/userService'

const state = {
    tenantName: 'cloud',
    userName: 'admin'
}

const getters = {
    tenantName: state => state.tenantName,
    userName: state => state.userName
}

const actions = {
    getSecret({ commit }, data) {
        return new Promise((resolve, reject) => {
            userService.getSecret(data)
                .done(salt => {
                    resolve(salt)
                }).fail(reject)
        })
    },
    login({ commit }, data) {
        return new Promise((resolve, reject) => {
            userService.login(data)
                .done(() => {
                    commit('login', data)
                    resolve()
                }).fail(reject)
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            userService.logout()
                .done(() => {
                    commit('logout')
                    resolve()
                })
                .fail(reject)
        })
    }
}

const mutations = {
    login(state, data) {
        state.userName = data.userName
        state.tenantName = data.tenantName
    },
    logout(state) {
        state.userName = ''
        state.tenantName = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}