const patterns = {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

const genericRules = {
  required: (message) => v => !!v || message,
  sixCharactersOrPlus: (message) => v => v.length >= 6 || message,
  compare: (firstItem, secondItem, message) => (firstItem === secondItem) || message,
  email: v => { return patterns.email.test(v) || 'E-mail precisa ser válido.'}
}

const rules = {
  email: [genericRules.required("E-mail é um campo requerido."), genericRules.email],
  password: [genericRules.required("Senha é um campo requerido."), genericRules.sixCharactersOrPlus("A senha precisa ter 6 ou mais caracteres.")],
}

export {
  patterns,
  genericRules,
  rules
} 