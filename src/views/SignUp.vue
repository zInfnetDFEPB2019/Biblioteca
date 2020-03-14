<template>
  <v-container class="d-flex align-center heightCompleteViewPortWithCalc72">
    <v-row class="d-flex justify-center">
      <v-col cols="4">
        <v-btn class="mb-7" to="/">
          <v-icon>keyboard_backspace</v-icon>
        </v-btn>
        <v-text-field append-icon="email" label="Email" :rules="emailRules" required solo></v-text-field>
        <div @mouseover="hover = true" @mouseleave="hover = false">
          <v-text-field append-icon="lock" label="Senha" :rules="passwordRule" :type="show ? 'text' : 'password'" v-model.lazy="password" required solo>
            <template slot="append">
              <v-icon v-if="hover" @click="show = !show">{{ show ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
              <v-icon>lock</v-icon>
            </template>
          </v-text-field>
        </div>
        <div @mouseover="hoverConfirm = true" @mouseleave="hoverConfirm = false">
          <v-text-field label="Confirmar Senha" :rules="passwordRule" :type="showConfirm ? 'text' : 'password'" v-model.lazy="passwordConfirmation" required solo>
          <template slot="append">
            <v-icon v-if="hoverConfirm" @click="showConfirm = !showConfirm">{{ showConfirm ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
            <v-icon>lock</v-icon>
          </template>
        </v-text-field>
        </div>
        <v-btn block class="mb-7">Cadastrar-se</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: '',
    passwordConfirmation: '',
    password: '',
    hover: false,
    hoverConfirm: false,
    show: false,
    showConfirm: false,
    emailRules: [
      v => !!v || 'E-mail é requerido',
      v => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(v) || 'E-mail precisa ser válido'
      }
    ],
    passwordRule: [
      v => !!v || 'Senha é requerido',
      v => v.length >= 6 || 'Senha precisa ter 6 caracteres'
    ]
  })
}
</script>