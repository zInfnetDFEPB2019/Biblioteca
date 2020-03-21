<template>
  <v-btn class="ml-4 height-48px" color="white" @click="goToRoute">
    <v-icon color="cyan">exit_to_app</v-icon>
  </v-btn>
</template>
<script>

export default {
  name: "Snackbar",
  methods: {
    goToRoute() {
      const actualRouteName = this.$route.name;
      switch (actualRouteName) {
        case "read":
        case "reading":
        case "wantread":
          this.logout();
          break;
        case "config":
          this.moveRoute(-1);
          break;
        default:
          break;
      }
    },
    logout() {
      this.$store.dispatch("auth/logout", null, { root: true });
    },
    moveRoute(integer) {
      this.$route.go(integer);
    }
  }
};
</script>
methods: {
    
  }