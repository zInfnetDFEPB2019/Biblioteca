<template>
  <v-app>
    <v-content>
      <HeaderOutSystem />
      <router-view></router-view>
    </v-content>
    <Snackbar />
    <ModalTwoOptions />
  </v-app>
</template>

<script>
import HeaderOutSystem from "./components/HeaderOutSystem";
import Snackbar from "./components/Snackbar";
import ModalTwoOptions from "./components/ModalTwoOptions";

import router from "./router/router";

export default {
  name: "App",
  components: { HeaderOutSystem, Snackbar, ModalTwoOptions },
  computed: {
    SnackbarUI() {
      return this.$store.state.ui.generic.snackbar;
    }
  },
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch("auth/verifyIfUserIsLogged");
    router.beforeEach((to, from, next) => {
      if (this.SnackbarUI.open) {
        this.$store.commit("ui/closeSnackbar");
      }
      next();
    });
  }
};
</script>
<style scoped>
.v-content {
  background: #e0f7fa !important;
}
.v-content__wrap {
  background: #e0f7fa !important;
}
</style>
