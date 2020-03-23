import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui/ui'
import auth from './modules/firebase/auth/auth'
import firestore from './modules/firebase/firestore/firestore'
import books from './modules/firebase/firestore/books'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    auth,
    firestore,
    books
  }
})
