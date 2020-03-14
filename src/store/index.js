import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//modules
import ui from './modules/ui/ui'
import auth from './modules/firebase/auth/auth'
import firestore from './modules/firebase/firestore/firestore'

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ui,
    auth,
    firestore,
  }
})
