<template>
  <v-btn class="ml-4 height-48px" color="white" @click="goToRoute">
    <v-icon color="cyan">exit_to_app</v-icon>
  </v-btn>
</template>
<script>
import preset from '../store/modules/ui/uiPreset'

export default {
  name: "ButtonExit",
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
      this.$store.commit("ui/genericModal", { typeModal: "modalTwoOptions", attributes: preset.ModalLogoutConfirmation });
    },
    moveRoute(integer) {
      this.$route.go(integer);
    }
  }
};
</script>
methods: {
    
  }