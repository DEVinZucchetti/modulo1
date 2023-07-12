import Pessoa from "./Pessoa.js";

console.log("m1_s07_a2");

// maneira de criar objetos com o mesmo formato
function PessoaFunc(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    mostraIdade() {
      console.log(this.idade);
    },
  };
}

// equivalente em classe
// class Pessoa {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   mostraIdade() {
//     console.log(this.idade);
//   }
// }

// const romeu = PessoaFunc("Romeu", 30);
// const isaac = PessoaFunc("Isaac", 29);
const romeu = new Pessoa("Romeu", 30);
const isaac = new Pessoa("Isaac", 29);

console.log(romeu);
console.log(isaac);

romeu.mostraIdade();
isaac.mostraIdade();
