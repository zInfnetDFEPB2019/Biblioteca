const  state = {
    snackbar: {
        open: false,
        color: "black",
        text: "default text",
        timeout: 0,
        top: true,
    }
}

const  getters = {
}

const  mutations = {
    openSnackbar(state, snackbarProperties){
        state.snackbar.open = true
        state.snackbar.color = snackbarProperties.color
        state.snackbar.text = snackbarProperties.text
        state.snackbar.timeout = snackbarProperties.timeout
        state.snackbar.top = snackbarProperties.top
    },
    closeSnackbar(state){
        state.snackbar.open = false
        Object.keys(state.snackbar).forEach(i => state.snackbar[i] = null)
    }
}

const  actions = {
}

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}