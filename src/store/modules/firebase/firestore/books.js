import * as firebase from 'firebase'

const READED = 'Readed'
const READ = 'Reading'
const WANTREAD = 'WantRead'


const state = {
    ReadedBook: null,
    ReadBook: null,
    WantReadBook: null,
};

const mutations = {
    wipeAllBooksArrays(state) {
        state.ReadedBook = null
        state.ReadBook = null
        state.WantReadBook = null
    },
    saveAllBooks(state, { collection, book }) {
        switch (collection) {
            case READED:
                state.ReadedBook = book;
                break;
            case READ:
                state.ReadBook = book;
                break;
            case WANTREAD:
                state.WantReadBook = book;
                break;
        }
    },
};

const actions = {
    watchData({ commit, rootGetters }, collection) {
        firebase
            .firestore()
            .collection("Books")
            .doc(rootGetters['auth/getUser'].id)
            .collection(collection)
            .onSnapshot(data => {
                var allData = [];
                data.forEach(document => {
                    let object = {}
                    for (let [property, valor] of Object.entries(document.data())) {
                        object[property] = valor
                    }
                    object["id"] = document.id
                    object["collection"] = collection
                    allData.unshift(object);
                });
                commit("saveAllBooks", { collection: collection, book: allData })
            })
    },
    addBook({ rootGetters }, { collection, object }) {
        firebase
            .firestore()
            .collection("Books")
            .doc(rootGetters['auth/getUser'].id)
            .collection(collection)
            .add(object)
            .then(data => {
                console.log(data); // eslint-disable-line
            })
            .catch(error => {
                console.log(error); // eslint-disable-line
            });
    },
    deleteBook({ rootGetters }, { collection, id }) {
        firebase
            .firestore()
            .collection("Books")
            .doc(rootGetters['auth/getUser'].id)
            .collection(collection)
            .doc(id)
            .delete()
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};
