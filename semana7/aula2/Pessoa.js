class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  mostraIdade() {
    console.log(this.idade);
  }
}

export default Pessoa;
