<template>
  <v-app>
    <v-content>
      <HeaderOutSystem />
      <router-view></router-view>
    </v-content>
    <Snackbar />
  </v-app>
</template>

<script>
import HeaderOutSystem from "./components/HeaderOutSystem";
import Snackbar from "./components/Snackbar";

import router from "./router/index";

export default {
  name: "App",
  components: { HeaderOutSystem, Snackbar },
  data: () => ({
    //
  }),
  created() {
    //Close snackbar after change route to any
    router.beforeEach((to, from, next) => {
      this.$store.commit("ui/closeSnackbar");
      next();
    });
  }
};
</script>
<style scoped>
.v-content{
  background: #E0F7FA!important;
}
.v-content__wrap{
  background: #E0F7FA!important;
}
</style>
