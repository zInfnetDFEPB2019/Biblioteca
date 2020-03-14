<template>
  <v-app>
    <v-container class="d-flex align-center heightCompleteViewPortWithCalc72">
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <v-btn class="mb-7" to="/">
            <v-icon>keyboard_backspace</v-icon>
          </v-btn>
          <v-form ref="form">
            <v-text-field append-icon="email" label="Email" v-model="email" :rules="emailRules" solo></v-text-field>
            <v-text-field append-icon="lock" type="password" label="Senha" v-model="password" :rules="passwordRules" solo></v-text-field>
          </v-form>
          <v-btn block class="mb-7" @click="login(email,password)">Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import rules from '../rules/rules'

export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: rules.email,
      passwordRules: rules.password,
    };
  },
  methods: {
    login(email, password) {
      if(this.$refs.form.validate()){
        this.$store.dispatch("auth/login", { email, password }, { root: true });
      }
    }
  }
};
</script>