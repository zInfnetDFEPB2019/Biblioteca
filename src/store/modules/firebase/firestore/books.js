import * as firebase from 'firebase'

const READED = 'readed'
const READ = 'read'
const WANTREAD = 'wantread'


const state = {
    ReadedBook: [],
    ReadBook: [],
    WantReadBook: [],
    user: {
        id: ''
    }
};

const mutations = {
    setUserID(state, id) {
        state.user.id = id
    },

    setBook(state, route, book) {
        switch (route) {
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
    getBookData(context, route) {
        // context.commit("setUserID", id)
        firebase
            .firestore()
            .collection("Books")
            .doc('plfTY56TkRSy2iPCpKKQclp5CuE3')
            .collection(route)
            .onSnapshot(data => {
                var allData = [];
                
                data.forEach(document => {
                    let object = {}

                    for (let [property, valor] of Object.entries(document.data())) {
                        object[property] = valor
                    }
                    allData.unshift(object);
                });

                switch (route) {
                    case READED:
                        context.state.ReadedBook = allData;
                        break;
                    case READ:
                        context.state.ReadBook = allData;
                        break;
                    case WANTREAD:
                        context.state.WantReadBook = allData;
                        break;
                }
            })
    },
};
  
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
  