<template>
  <v-app>
    <v-container class="d-flex align-center heightCompleteViewPortWithCalc72">
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-btn class="mb-7" to="/">
            <v-icon>keyboard_backspace</v-icon>
          </v-btn>
          <v-text-field append-icon="email" label="Email" solo></v-text-field>
          <v-text-field append-icon="lock" label="Senha" solo></v-text-field>
          <v-btn block class="mb-7" to="/app/reading">Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>