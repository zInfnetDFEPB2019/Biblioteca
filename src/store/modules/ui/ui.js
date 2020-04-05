let dispatchOrCommit = { name: null, parameter: null }

const state = {
    search: {
        selected: null,
        data: null
    },
    generic: {
        snackbar: {
            open: false,
            color: "black",
            text: "default text",
            timeout: 0,
            top: true,
        },
        modalTwoOptions: {
            open: false,
            executeActions: false,
            title: null,
            message: null,
            firstButton: {
                color: null,
                text: null,
                actions: {
                    dispatch: Object.assign({}, dispatchOrCommit),
                    commit: Object.assign({}, dispatchOrCommit)
                }
            },
            secondButton: {
                color: null,
                text: null,
                actions: {
                    dispatch: Object.assign({}, dispatchOrCommit),
                    commit: Object.assign({}, dispatchOrCommit)
                }
            },
        },
    }
}

const getters = {
}

const mutations = {
    openSnackbar(state, snackbarProperties) {
        state.generic.snackbar.open = true
        state.generic.snackbar.color = snackbarProperties.color
        state.generic.snackbar.text = snackbarProperties.text
        state.generic.snackbar.timeout = snackbarProperties.timeout
        state.generic.snackbar.top = snackbarProperties.top
    },
    closeSnackbar(state) {
        state.generic.snackbar.open = false
        Object.keys(state.generic.snackbar).forEach(i => state.generic.snackbar[i] = null)
    },
    getSearchData(state, object) {
        state.search.data = object;
    },
    getSelectedSearchData(state, object) {
        state.search.selected = object;
    },
    wipeSearchData(state) {
        state.search.data = null
    },
    wipeModalSelectedSearchData(state) {
        state.search.selected = null
    },
    genericModal(state, { typeModal, attributes }) {
        switch (typeModal) {
            case "modalOneOption":
                state.generic.modalOneOption.open = !state.generic.modalOneOption.open
                if (state.generic.modalOneOption.open) {
                    state.generic.modalOneOption.title = attributes.title
                    state.generic.modalOneOption.message = attributes.message
                    state.generic.modalOneOption.buttonColor = attributes.buttonColor
                    state.generic.modalOneOption.buttonText = attributes.buttonText
                    state.generic.modalOneOption.dispatch.name = attributes.dispatch.name
                    state.generic.modalOneOption.dispatch.parameter = attributes.dispatch.parameter
                    state.generic.modalOneOption.commit.name = attributes.commit.name
                    state.generic.modalOneOption.commit.parameter = attributes.commit.parameter
                    if (state.generic.modalOneOption.dispatch.name != null || state.generic.modalOneOption.commit.name != null) {
                        state.generic.modalOneOption.executeActions = true
                    }
                } else {
                    state.generic.modalOneOption.title = null
                    state.generic.modalOneOption.message = null
                    state.generic.modalOneOption.buttonColor = null
                    state.generic.modalOneOption.buttonText = null
                    state.generic.modalOneOption.dispatch.name = null
                    state.generic.modalOneOption.dispatch.parameter = null
                    state.generic.modalOneOption.commit.name = null
                    state.generic.modalOneOption.commit.parameter = null
                    state.generic.modalOneOption.executeActions = false
                }
                break;
            case "modalTwoOptions":
                state.generic.modalTwoOptions.open = !state.generic.modalTwoOptions.open
                if (state.generic.modalTwoOptions.open) {
                    state.generic.modalTwoOptions.title = attributes.title
                    state.generic.modalTwoOptions.message = attributes.message
                    state.generic.modalTwoOptions.firstButton.color = attributes.firstButton.color
                    state.generic.modalTwoOptions.firstButton.text = attributes.firstButton.text
                    state.generic.modalTwoOptions.firstButton.actions.dispatch.name = attributes.firstButton.actions.dispatch.name
                    state.generic.modalTwoOptions.firstButton.actions.dispatch.parameter = attributes.firstButton.actions.dispatch.parameter
                    state.generic.modalTwoOptions.firstButton.actions.commit.name = attributes.firstButton.actions.commit.name
                    state.generic.modalTwoOptions.firstButton.actions.commit.parameter = attributes.firstButton.actions.commit.parameter
                    state.generic.modalTwoOptions.secondButton.color = attributes.secondButton.color
                    state.generic.modalTwoOptions.secondButton.text = attributes.secondButton.text
                    state.generic.modalTwoOptions.secondButton.actions.dispatch.name = attributes.secondButton.actions.dispatch.name
                    state.generic.modalTwoOptions.secondButton.actions.dispatch.parameter = attributes.secondButton.actions.dispatch.parameter
                    state.generic.modalTwoOptions.secondButton.actions.commit.name = attributes.secondButton.actions.commit.name
                    state.generic.modalTwoOptions.secondButton.actions.commit.parameter = attributes.secondButton.actions.commit.parameter
                    if (state.generic.modalTwoOptions.firstButton.actions.dispatch.name != null || state.generic.modalTwoOptions.firstButton.actions.commit.name != null || state.generic.modalTwoOptions.secondButton.actions.commit.name != null || state.generic.modalTwoOptions.secondButton.actions.dispatch.name != null) {
                        state.generic.modalTwoOptions.executeActions = true
                    }
                } else {
                    state.generic.modalTwoOptions.title = null
                    state.generic.modalTwoOptions.message = null
                    state.generic.modalTwoOptions.firstButton.color = null
                    state.generic.modalTwoOptions.firstButton.text = null
                    state.generic.modalTwoOptions.firstButton.actions.dispatch.name = null
                    state.generic.modalTwoOptions.firstButton.actions.dispatch.parameter = null
                    state.generic.modalTwoOptions.firstButton.actions.commit.name = null
                    state.generic.modalTwoOptions.firstButton.actions.commit.parameter = null
                    state.generic.modalTwoOptions.secondButton.color = null
                    state.generic.modalTwoOptions.secondButton.text = null
                    state.generic.modalTwoOptions.secondButton.actions.dispatch.name = null
                    state.generic.modalTwoOptions.secondButton.actions.dispatch.parameter = null
                    state.generic.modalTwoOptions.secondButton.actions.commit.name = null
                    state.generic.modalTwoOptions.secondButton.actions.commit.parameter = null
                    state.generic.modalTwoOptions.executeActions = false
                }
                break;
            default:
                break;
        }
    }
}

const actions = {
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}