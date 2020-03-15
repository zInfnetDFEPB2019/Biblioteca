<template>
  <v-toolbar style="height:unset;" class="d-flex align-center" color="cyan">
    <v-text-field class="" hide-details label="Pesquisar" solo>
      <template slot="append">
        <v-icon color="cyan">search</v-icon>
      </template>
    </v-text-field>
    <v-btn to="/app/configs" color="white" class="ml-4 height-48px">
      <v-icon color="cyan">settings</v-icon>
    </v-btn>
    <v-btn class="ml-4 height-48px" color="white" @click="logout">
      <v-icon color="cyan">exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: "HeaderApplication",
  methods:{
    logout(){
      this.$store.dispatch("auth/logout", null, {root: true})
    }
  }
};
</script>