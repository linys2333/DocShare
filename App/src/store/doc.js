import docService from 'SERVICE/docService'

const state = {
    topicList: []
}

const getters = {
    topicList: state => state.topicList
}

const actions = {
    getTopicList({ commit }) {
        return docService.getTopicList()
            .then(doc => {
                commit('setTopic', doc)
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