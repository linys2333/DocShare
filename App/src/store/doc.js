import docService from 'SERVICE/docService'

const state = {
    topicList: [{
        id: '1',
        icon: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '芮瑞讲解项目投资收益产品',
        desc: '芮瑞说项目投资收益产品其实很简单！不信，你来听听看~',
        author: '刘芮瑞',
        docList: [{
            title: '',
            desc: '',
            time: 60,
            size: 1024
        }]
    }, {
        id: '2',
        icon: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '李坤分析项目投资收益售前案例',
        desc: '如何把一个陌生的产品讲出“花”来？请听我一一道来',
        author: '李坤',
        docList: [{
            title: '',
            desc: '',
            time: 60,
            size: 1024
        }]
    }]
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