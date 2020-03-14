<template>
  <v-app>
    <v-content>
      <HeaderOutSystem />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HeaderOutSystem from "./components/HeaderOutSystem";

export default {
  name: "App",

  components: { HeaderOutSystem },

  data: () => ({
    //
  })
};
</script>
