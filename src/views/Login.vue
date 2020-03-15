<template>
  <v-container class="d-flex align-center heightCompleteViewPortWithCalc72">
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-btn color="cyan white--text" class="mb-7" to="/">
          <v-icon>keyboard_backspace</v-icon>
        </v-btn>
        <v-form ref="form">
          <v-text-field label="Email" v-model="email" :rules="rules.email" solo>
            <template slot="append">
              <v-icon color="cyan">email</v-icon>
            </template>
          </v-text-field>
          <v-text-field
            type="password"
            label="Senha"
            v-model="password"
            :rules="rules.password"
            solo
          >
            <template slot="append">
              <v-icon color="cyan">lock</v-icon>
            </template>
          </v-text-field>
        </v-form>
        <v-btn block color="cyan white--text" class="mb-7" @click="login(email,password)">Login</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { rules } from "../rules/rules";

export default {
  data() {
    return {
      email: "",
      password: "",
      rules: {
        email: rules.email,
        password: rules.password
      }
    };
  },
  methods: {
    login(email, password) {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("auth/login", { email, password }, { root: true });
      }
    }
  }
};
</script>
<style scoped>
</style>