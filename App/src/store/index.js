import Vuex from 'vuex'
import doc from './doc'
import wx from './wx'

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        wx,
        doc
    },
    strict: debug
})

export default store