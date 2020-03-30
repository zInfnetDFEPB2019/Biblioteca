<template>
  <v-toolbar style="height:unset;" class="d-flex align-center" color="cyan">
    <InputSearch />
    <ButtonExit />
    <ModalSearch />
  </v-toolbar>
</template>
<script>
import InputSearch from "./Search/InputSearch";
import ModalSearch from "./Search/ModalSearch";
import ButtonExit from "../../ButtonExit";

export default {
  name: "HeaderApplication",
  components: {
    InputSearch,
    ModalSearch,
    ButtonExit
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout", null, { root: true });
    }
  }
};
</script>
<style scoped>
</style>