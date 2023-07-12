import Item from "./Item.js";

console.log("m1_s07_a3");

const elemLista = document.getElementById("lista-itens");

const dadosListaCrua = [
  {
    id: 1,
    titulo: "Batata",
  },
  {
    id: 2,
    titulo: "Arroz",
  },
  {
    id: 3,
    titulo: "Ervilha",
  },
];

let listaControle = [];

function criaInstanciasItens(lista) {
  return lista.map((item) => {
    return new Item(item);
  });
}

function atualizaTela() {
  elemLista.innerHTML = "";

  listaControle.forEach((item) => {
    const elemItem = item.criaItem();
    elemLista.appendChild(elemItem);
  });
}

// função anônima de uso único
(function () {
  // inicialização da nossa aplicação
  listaControle = criaInstanciasItens(dadosListaCrua);
  atualizaTela();
})();
