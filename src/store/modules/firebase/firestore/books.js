import * as firebase from 'firebase'

const READED = 'Readed'
const READ = 'Reading'
const WANTREAD = 'WantRead'


const state = {
    ReadedBook: [],
    ReadBook: [],
    WantReadBook: [],
};

const mutations = {
    saveBook(state, {collection, book}) {
        switch (collection) {
            case READED:
                state.ReadedBook.push(book);
                break;
            case READ:
                state.ReadBook.push(book);
                break;
            case WANTREAD:
                state.WantReadBook.push(book);
                break;
        }
    }
};

const actions = {
    watchData({ commit, rootGetters }, collection) {
        console.log(collection) //eslint-disable-line
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
                    allData.unshift(object);
                });
                commit("saveBook", { collection: collection, book: allData })
            })
    },
};
  
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
  