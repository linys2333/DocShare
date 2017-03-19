import Vue from 'vue'
import Vuex from 'vuex'
import doc from './doc'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        doc
    },
    strict: debug
})

export default store