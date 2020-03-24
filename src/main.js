import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import vuetify from './plugins/vuetify';
import PortalVue from 'portal-vue'
import SDK from './store/modules/firebase/SDK'
import * as firebase from 'firebase'

Vue.use(PortalVue)

Vue.config.productionTip = false

import "@/assets/global.css"

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  beforeCreate(){
    firebase.initializeApp(SDK)
    firebase.analytics();
  },
}).$mount('#app')
