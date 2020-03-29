let nullAction = { name: null, parameter: null }

let preset = {
    ModalLoginError: {
        title: "Error", message: "receberMensagem", buttonColor: "red", buttonText: "OK", dispatch: nullAction, commit: nullAction
    },
    ModalLogoutConfirmation: {
        title: "Tem certeza que deseja sair do sistema?",
        message: null,
        executeActions: true,
        firstButton: {
            color: "green", text: "SIM", actions: { dispatch: { name: "auth/logout", parameter: null }, commit: nullAction }
        },
        secondButton: {
            color: "red", text: "NÃO", actions: { dispatch: nullAction, commit: nullAction }
        }
    },
    ModalDeleteCaregiverConfirmation: {
        title: "Deletar Cuidador(a)",
        message: "Tem certeza que deseja deletar ",
        executeActions: true,
        firstButton: {
            color: "green", text: "SIM", actions: { dispatch: { name: "firestore/deleteObject", parameter: null }, commit: { name: null, parameter: null } }
        },
        secondButton: {
            color: "red", text: "NÃO", actions: { dispatch: nullAction, commit: nullAction }
        }
    },
    ModalDeleteClientConfirmation: {
        title: "Deletar Cliente",
        message: "Tem certeza que deseja deletar ",
        executeActions: true,
        firstButton: {
            color: "green", text: "SIM", actions: { dispatch: { name: "firestore/deleteObject", parameter: null }, commit: { name: null, parameter: null } }
        },
        secondButton: {
            color: "red", text: "NÃO", actions: { dispatch: nullAction, commit: nullAction }
        }
    }
}

export default preset