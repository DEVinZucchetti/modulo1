console.log("m1s05a2");

// VARIAVEL SIMPLES
const texto = "casa";
//console.log(texto);

// VARIAVEIS COMPOSTAS

// VETORES/ARRAYS
// índice: index, idx, i
// inicializa um vetor
const vetor = ["arroz", "laranja", "feijao"];
// adiciona itens
vetor.push("batata");
// altera item do indice 1
vetor[1] = "cenoura";
// mostra todo
//console.log(vetor);
// acessa item do indice 2
//console.log(vetor[2]);
// mostra comprimento
//console.log(vetor.length);
// acessa o ultimo item
//console.log(vetor[vetor.length - 1]);
//console.log(vetor.at(-1));

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// acessa o número 5
//console.log(matrix[1][1]);

// EXEMPLO OBJETOS
// par chave-valor/key-value
// cria um objeto
const qqrnome = { bla: 33 };
// acrescenta mais um par chave-valor
qqrnome.ble = 66;
// acessa o valor da chave bla
console.log(qqrnome.bla);

// exemplo estrutura de array com objetos
const listaPessoas = [
  {
    id: 1,
    nome: "Romeu",
    profissao: "programador",
  },
  {
    id: 2,
    nome: "Isaac",
    profissao: "mentor",
  },
];

console.log(listaPessoas[1].profissao);
