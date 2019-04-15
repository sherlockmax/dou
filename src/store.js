import Vue from 'vue'
import Vuex from 'vuex'
import api from './plugins/api'

Vue.use(Vuex)

const state = {
  packageVersion: null,
  guaVersion: null,
  groupList: {}
}

export default new Vuex.Store({
  state,
  getters: {
    getPackageVersion: (state) => {
      return state.packageVersion
    },
    getGuaVersion: (state) => {
      return state.guaVersion
    },
    getGroupList: (state) => {
      return state.groupList
    }
  },
  mutations: {
    setPackageVersion(state, payload) {
      state.packageVersion = payload
    },
    setGuaVersion(state, payload) {
      state.guaVersion = payload
    },
    setGroupList(state, payload) {
      state.groupList = payload
    }
  },
  actions: {
    updatePackageVersion({ commit }) {
      commit('setPackageVersion', 'v0.0.1.bate1')
    },
    updateGuaVersion({ commit }) {
      api.GetGuaVersion().then((version) => {
        commit('setGuaVersion', version)
      })
    },
    async updateGroupList({ commit }) {
      await api.GetGroupList().then(async (groupList) => {
        let groupMap = {}
        for (let i = 0; i < groupList.length; i++) {
          await api.GetGroupInfo(groupList[i]).then((groupToken) => {
            groupMap[groupList[i]] = {
              name: groupList[i],
              token: groupToken
            }
          })
        }
        commit('setGroupList', groupMap)
      })
    }
  }
})
