import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        moreInformation: true
    },
    getters: {
        getMoreInformation(state) {
            return state.moreInformation
        }
    },
    mutations: {
        showMoreInformation(state, payload) {
            state.moreInformation = payload
        }
    }
})