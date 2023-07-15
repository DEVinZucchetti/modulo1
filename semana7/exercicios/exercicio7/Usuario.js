class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  autenticar(emailInformado, senhaInformada) {
    return this.email === emailInformado && this.senha === senhaInformada;
  }
}

export default Usuario;
