<template>
  <v-container class="d-flex align-center heightCompleteViewPortWithCalc72">
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-form ref="form">
          <v-btn class="mb-7" to="/">
            <v-icon>keyboard_backspace</v-icon>
          </v-btn>
          <v-text-field append-icon="email" label="Email" :rules="rules.email" v-model="email" required solo></v-text-field>
          <div @mouseover="hover = true" @mouseleave="hover = false">
            <v-text-field
              append-icon="lock"
              label="Senha"
              :rules="rules.password"
              :type="show ? 'text' : 'password'"
              v-model.lazy="password"
              required
              solo
            >
              <template slot="append">
                <v-icon v-if="hover" @click="show = !show">{{ show ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
                <v-icon>lock</v-icon>
              </template>
            </v-text-field>
          </div>
          <div @mouseover="hoverConfirm = true" @mouseleave="hoverConfirm = false">
            <v-text-field
              label="Confirmar Senha"
              :rules="confirmPasswordRules"
              :type="showConfirm ? 'text' : 'password'"
              v-model.lazy="passwordConfirmation"
              required
              solo
            >
              <template slot="append">
                <v-icon
                  v-if="hoverConfirm"
                  @click="showConfirm = !showConfirm"
                >{{ showConfirm ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
                <v-icon>lock</v-icon>
              </template>
            </v-text-field>
          </div>
          <v-btn block class="mb-7" @click="signup(email, password)">Cadastrar-se</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { rules, genericRules } from "../rules/rules";

export default {
  data: () => ({
    email: "",
    passwordConfirmation: "",
    password: "",
    hover: false,
    hoverConfirm: false,
    show: false,
    showConfirm: false,
    rules: {
      email: rules.email,
      password: rules.password
    }
  }),
  computed: {
    confirmPasswordRules() {
      return [
        ...this.rules.password,
        genericRules.compare(
          this.password,
          this.passwordConfirmation,
          "As senhas devem ser idênticas."
        )
      ];
    }
  },
  methods: {
    signup(email, password) {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("auth/signup", { email, password }, { root: true });
      }
    }
  }
};
</script>