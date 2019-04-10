import Vue from 'vue'
import Vuex from 'vuex'
import api from './plugins/api'

Vue.use(Vuex)

const state = {
  packageVersion: null,
  guaVersion: null
}

export default new Vuex.Store({
  state,
  getters: {
    getPackageVersion: (state) => {
      return state.packageVersion
    },
    getGuaVersion: (state) => {
      return state.guaVersion
    }
  },
  mutations: {
    setPackageVersion(state, payload) {
      state.packageVersion = payload
    },
    setGuaVersion(state, payload) {
      state.guaVersion = payload
    }
  },
  actions: {
    updatePackageVersion({ commit }) {
      commit('setPackageVersion', 'v0.0.1.bate1')
    },
    async updateGuaVersion({ commit }) {
      api.GetGuaVersion().then((version) => {
        commit('setGuaVersion', version)
      })
    }
  }
})
