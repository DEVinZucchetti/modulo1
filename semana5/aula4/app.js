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
  const elementoItem = document.createElement("li");

  elementoItem.innerHTML = `Id: ${id} Nome: ${nome} Idade:${idade}`;

  elementoLista.appendChild(elementoItem);
});
