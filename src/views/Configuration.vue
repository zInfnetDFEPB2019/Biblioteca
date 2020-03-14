<template>
  <v-app>
    <v-container class="d-flex align-center">
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-btn to="/app/reading" class="mb-5">
            <v-icon>keyboard_backspace</v-icon>
          </v-btn>
          <v-switch v-model="people" label="Alterar Tema" value="John"></v-switch>
          <v-btn block color="error" class="mb-5">Alterar senha</v-btn>
          <v-btn block color="error" class="mb-5">Resetar dados</v-btn>
          <v-btn block color="error" class="mb-5">Excluir Conta</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>