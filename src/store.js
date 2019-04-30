import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showFooter: false
  },
  mutations: {
    hideFooter (state) {
      state.showFooter = false
    },
    showFooter (state) {
      state.showFooter = true
    }
  },
  actions: {
    hideFooter ({ commit }) {
      commit('hideFooter')
    },
    showFooter ({ commit }) {
      commit('showFooter')
    }
  },
  getters: {
    getFooterState: state => {
      return state.showFooter
    }
  }
})
