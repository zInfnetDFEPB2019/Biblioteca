<template>
  <v-toolbar
    v-if="this.$route.path == '/' || this.$route.path == '/login' || this.$route.path == '/signup'"
    style="height:unset;"
    class="d-flex align-center"
  >
    <v-img
      alt="BiblioTech Logo"
      class="shrink mr-2"
      contain
      src="https://d24fhjdx0edbmp.cloudfront.net/405e08ff-0727-4419-925a-ce41043b47a8_thumb.png"
      transition="scale-transition"
      width="40"
    />

    <span to="/" class="ml-3 font-weight-black title">BiblioTech</span>
    <v-spacer></v-spacer>
    <v-btn to="/login" class="ml-4">
      <v-icon class="mr-4">mdi-login</v-icon>Login
    </v-btn>
    <v-btn to="/signup" class="ml-4">
      <v-icon class="mr-4">mdi-settings</v-icon>Cadastrar-se
    </v-btn>
  </v-toolbar>
</template>