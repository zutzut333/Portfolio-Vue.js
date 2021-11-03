import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'ENG'
  },
  mutations: {
    setLanguage(state, SelectedLanguage) {
      state.language = SelectedLanguage;
    }
  },
  actions: {
  },
  modules: {
  },
})
