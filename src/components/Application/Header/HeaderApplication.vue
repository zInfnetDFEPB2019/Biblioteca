<template>
  <v-toolbar style="height:unset;" class="d-flex align-center" color="cyan">
    <InputSearch />
    <!-- <v-expand-transition>
      <v-list v-if="model" class="red lighten-3">
        <v-list-item v-for="(field, i) in fields" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="field.value"></v-list-item-title>
            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition>-->
    <!-- <v-btn :to="{name:'configuration'}" color="white" class="ml-4 height-48px">
      <v-icon color="cyan">settings</v-icon>
    </v-btn>-->
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