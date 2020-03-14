const rules = {
    email: [
        v => !!v || 'E-mail é requerido',
        v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'E-mail precisa ser válido'
        }
      ],
      password: [
        v => !!v || 'Senha é requerido',
        v => v.length >= 6 || 'Senha precisa ter 6 caracteres'
      ]
} 

export default rules