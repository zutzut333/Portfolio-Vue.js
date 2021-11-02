import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: "FR"
  },
  mutations: {
    change (state) {
      state.language = "language"
  },
  actions: {
  },
  modules: {
  }
})
