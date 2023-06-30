console.log("m1s05a4");

const elementoLista = document.getElementById("lista");

// inicialização de array via new
//const vetor = new Array(3, 2);
const vetor = [3, 2];

vetor.push(6);
//console.log(vetor);

// exemplo de função dentro de objeto
// const objeto = {};
// objeto.teste = () => {
//   console.log("funciona");
// };
// objeto.teste();

// array de objetos
const pessoas = [
  {
    id: 1,
    nome: "Ada",
    idade: 36,
  },
  {
    id: 2,
    nome: "Romeu",
    idade: 30,
  },
  {
    id: 3,
    nome: "Isaac",
    idade: 31,
  },
];

// exemplo for comum
for (let i = 0; i < pessoas.length; i++) {
  //console.log(pessoas[i].nome);
}
// exemplo for of
for (let item of pessoas) {
  //console.log(item.nome);
}

// exemplo forEach
//pessoas.forEach(({ id, nome, idade }) => {
// equivalente a
pessoas.forEach((item) => {
  const { id, nome, idade } = item;
  // cria um elemento HTML
  const elementoItem = document.createElement("li");
  // modifica o HTML interno do elemento
  elementoItem.innerHTML = `Id: ${id} Nome: ${nome} Idade:${idade}`;
  // coloca o elemento dentro da lista na página
  elementoLista.appendChild(elementoItem);
});

// exemplo map
// map cria um novo array com os returns de cada volta
const resultado = pessoas.map(({ id, nome, idade }) => {
  return `Id: ${id} Nome: ${nome} Idade:${idade}`;
});

//console.log(resultado);

const termoDePesquisa = "a";

// exemplo filter
const filtrado = pessoas.filter(({ nome }) => {
  return nome.includes(termoDePesquisa);
});

if (filtrado.length) {
  //console.log(filtrado);
} else {
  //console.log("nada filtrado");
}

// exemplo find
const encontrado = pessoas.find((item) => {
  return item.id === 2;
});

if (encontrado) {
  //console.log(encontrado);
} else {
  //console.log("não encontrado");
}

// exemplo every
// testa se todos elementos satisfazem a condição da função
const todosSatisfazem = pessoas.every((item) => {
  return item.idade > 30;
});

console.log({ todosSatisfazem });

// exemplo some
// testa se ao menos um elemento satisfaz a condição da função
const algumSatisfaz = pessoas.some((item) => {
  return item.idade > 30;
});

console.log({ algumSatisfaz });
