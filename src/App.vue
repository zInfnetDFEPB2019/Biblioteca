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

export default {
  name: "App",

  components: { HeaderOutSystem, Snackbar },

  data: () => ({
    //
  })
};
</script>
