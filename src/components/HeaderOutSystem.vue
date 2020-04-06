<template>
  <v-toolbar
    v-if="this.$route.path == '/' || this.$route.path == '/login' || this.$route.path == '/signup'"
    color="cyan"
    style="height:unset;"
    class="d-flex align-center"
  >
    <v-img
      alt="BiblioTech Logo"
      class="shrink mr-2"
      contain
      src="https://media.discordapp.net/attachments/691021694063607879/696576055221288980/logo.png"
      transition="scale-transition"
      width="40"
    />

    <span to="/" class="ml-3 font-weight-black title">BiblioTech</span>
    <v-spacer></v-spacer>
    <v-btn to="/login" class="ml-4" color="white" outlined>
      <v-icon class="mr-2">mdi-login</v-icon>Login
    </v-btn>
    <v-btn to="/signup" class="ml-4" color="white" outlined>
      <v-icon class="mr-2">mdi-account-plus</v-icon>Cadastrar-se
    </v-btn>
  </v-toolbar>
</template>

<style scoped>
span {
  color: white
}
</style>