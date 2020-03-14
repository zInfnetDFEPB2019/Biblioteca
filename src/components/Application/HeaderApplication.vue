<template>
  <v-toolbar style="height:unset;" class="d-flex align-center">
    <v-text-field class="" append-icon="search" hide-details label="Pesquisar" solo></v-text-field>
    <v-btn to="/app/configs" class="ml-4 height-48px">
      <v-icon>settings</v-icon>
    </v-btn>
    <v-btn to="/" class="ml-4 height-48px">
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: "HeaderApplication"
};
</script>