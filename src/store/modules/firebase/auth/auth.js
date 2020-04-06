import * as firebase from "firebase";
import router from '../../../../router/router'

const state = {
    user: {
        email: null,
        id: null,
    }
}

const getters = {
    getUser: state => {
        return state.user
    }
}

const mutations = {
    updateUserInfo(state, user) {
        if (user) {
            state.user.email = user.email
            state.user.id = user.uid
        } else {
            state.user.email = null
            state.user.id = null
        }
    },
}

const actions = {
    login({ commit }, { email, password }) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                router.push("app/").then(() => { commit("ui/closeSnackbar", null, { root: true }) }).catch(() => { })
            })
            .catch(error => {
                let errorMessage = loginErrorInternalization(error)
                let snackbarProperties = {
                    color: "red",
                    text: errorMessage,
                    timeout: 2500,
                    top: true,
                }
                commit("ui/openSnackbar", snackbarProperties, { root: true });
            })
    },
    logout({ commit }) {
        firebase.auth().signOut()
            .then(() => {
                router.push("/").catch(() => { })
                commit("books/wipeAllBooksArrays", null, { root: true })
            })
    },
    signup({ commit }, { email, password }) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                let snackbarProperties = {
                    color: "green",
                    text: "Cadastro realizado com sucesso!",
                    timeout: 2500,
                    top: true,
                }
                commit("ui/openSnackbar", snackbarProperties, { root: true })
            })
            .catch(error => {
                let errorMessage = signupErrorInternalization(error)
                let snackbarProperties = {
                    color: "red",
                    text: errorMessage,
                    timeout: 0,
                    top: true,
                }
                commit("ui/openSnackbar", snackbarProperties, { root: true })
            });
    },
    verifyIfUserIsLogged({ dispatch, commit }) {
        firebase.auth().onAuthStateChanged(user => {
            commit("updateUserInfo", user)
            if (user != null) {
                dispatch("books/watchData", "Readed", { root: true });
                dispatch("books/watchData", "Reading", { root: true });
                dispatch("books/watchData", "WantRead", { root: true });
            }
        })
    }
}

function loginErrorInternalization(error) {
    switch (error.code) {
        case "auth/too-many-requests":
            return "Muitas tentativas de login, tente novamente mais tarde."
        case "auth/wrong-password":
            return "Senha inválida."
        case "auth/user-not-found":
            return "Usuário não encontrado."
        default:
            break;
    }
}

function signupErrorInternalization(error) {
    switch (error.code) {
        case "auth/email-already-in-use":
            return "Este e-mail já está em uso, tente outro."
        case "auth/invalid-email":
            return "E-mail inválido."
        case "auth/operation-not-allowed":
            return "Operação não permitida."
        case "auth/weak-password":
            return "A senha precisa ser mais forte."
        default:
            break;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}