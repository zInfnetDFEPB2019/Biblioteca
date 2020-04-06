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
      console
      switch (actualRouteName) {
        case "Readed":
        case "Reading":
        case "WantRead":
          console.log("ALO")//eslint-disable-line
          this.logout();
          break;
        case "configuration":
        case "search":
          this.moveRoute(-1);
          break;
        default:
          break;
      }
    },
    logout() {
      console.log("ALO")//eslint-disable-line
      this.$store.commit("ui/genericModal", { typeModal: "modalTwoOptions", attributes: preset.ModalLogoutConfirmation });
    },
    moveRoute(integer) {
      this.$router.go(integer);
    }
  }
};
</script>
methods: {
    
  }