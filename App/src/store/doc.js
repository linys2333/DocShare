import docService from 'SERVICE/docService'

const state = {
    topicList: []
}

const getters = {
    topicList: state => state.topicList
}

const actions = {
    getTopicList({ commit }) {
        return new Promise((resolve, reject) => {
            docService.getTopicList()
                .done(doc => {
                    commit('setTopic', doc)
                    resolve()
                }).fail(reject)
        })
    }
}

const mutations = {
    setTopic(state, data) {
        state.topicList = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}