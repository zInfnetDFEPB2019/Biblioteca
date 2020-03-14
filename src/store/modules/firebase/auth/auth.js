// import * as firebase from "firebase";
// import router from '../../../../router/index'

const state = {
    user: {
        email: null,
        id: null,
    }
}

const getters = {
}

const mutations = {
    // updateUserInfo(state, user) {
    //     if (user) {
    //         state.user.email = user.email
    //         state.user.id = user.uid
    //     } else {
    //         state.user.email = null
    //         state.user.id = null
    //     }
    // },
}

const actions = {
    // login({ commit }, { email, password }) {
    //     firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    //         router.push("dashboard").catch(() => { })
    //     }).catch(error => {
    //         let errorMessage = loginErrorInternalization(error)
    //         preset.ModalLoginError.message = errorMessage
    //         commit("ui/genericModal", { typeModal: "modalOneOption", attributes: preset.ModalLoginError }, { root: true });
    //     })
    // },
    // logout() {
    //     firebase.auth().signOut().then(() => {
    //         router.push("/").catch(() => { })
    //     }).catch(error => {
    //         console.log(error) // eslint-disable-line
    //     })
    // },
    // verifyIfUserIsLogged({ dispatch, commit }) {
    //     firebase.auth().onAuthStateChanged(user => {
    //         commit("updateUserInfo", user)
    //         dispatch("firestore/watchData", "clientes", { root: true })
    //         dispatch("firestore/watchData", "cuidadoras", { root: true })
    //     })
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}