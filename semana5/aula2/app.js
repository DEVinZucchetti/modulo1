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
//console.log(qqrnome.bla);

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
// acessa nome da segunda pessoa
//console.log(listaPessoas[1].nome);

// ESCOPO
// escopo de funcao
// var obedece apenas escopo de funcao
function definirLargura() {
  var largura = 100;
  console.log(largura);
}
//definirLargura();
//console.log(largura);

// escopo de bloco
// var não é contida em escopo de bloco
if (true) {
  var largura = 999;
  //console.log(largura);
}
//console.log(largura);

// const e let são contidas em escopo de bloco
// e também escopo de funcao
if (true) {
  const comprimento = 111;
  console.log(comprimento);
}
// erro pois comprimento nao existe fora do bloco
//console.log(comprimento);
