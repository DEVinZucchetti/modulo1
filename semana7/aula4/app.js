import Item from "./Item.js";
import ItemTarefa from "./ItemTarefa.js";
import { dadosLista } from "./dados.js";

console.log("m1_s07_a4");

const elemFormulario = document.querySelector("#formulario");
const elemLista = document.querySelector("#lista-itens");
const campoTitulo = document.getElementById("titulo-item");
const campoTipo = document.getElementById("tipo-item");
let listaControle = [];

function criaInstanciaItem(dadosItem) {
  switch (dadosItem.tipo) {
    case "tarefa":
      return new ItemTarefa(dadosItem);

    default:
      return new Item(dadosItem);
  }
}

function populaListaControle(listaCrua) {
  listaControle = listaCrua.map(criaInstanciaItem);
}

function removeItemPorId(idItem) {
  listaControle = listaControle.filter((item) => item.id !== idItem);
  atualizaTela();
}

function atualizaTela() {
  elemLista.innerHTML = "";

  listaControle.forEach((item) => {
    const elemItem = item.criaItem();
    // adiciona escutador de evento de remoção
    const botaoRemover = elemItem.querySelector(".botao-remover");
    botaoRemover.addEventListener("click", () => removeItemPorId(item.id));
    // coloca elemento na tela
    elemLista.appendChild(elemItem);
  });
}

function adicionaItem(item) {
  const novaInstanciaItem = criaInstanciaItem(item);
  listaControle.push(novaInstanciaItem);
  console.log(listaControle);
}

function processaSubmit(evento) {
  // prevenir a execução do comportamento padrão de submit
  evento.preventDefault();

  // agrupando valores do formulario
  const novoItem = {
    id: Date.now(), // id unico milissegundos
    titulo: campoTitulo.value,
    tipo: campoTipo.value,
  };

  if (novoItem.tipo === "tarefa") {
    novoItem.concluida = false;
  }

  adicionaItem(novoItem);
  elemFormulario.reset();
  atualizaTela();
}

// função anônima de uso único
// inicialização da nossa aplicação
(function () {
  // popula lista de controle
  populaListaControle(dadosLista);
  // atualiza a tela
  atualizaTela();
  // adiciona escutadores de eventos
  elemFormulario.addEventListener("submit", processaSubmit);

  // const instanciaItem = listaControle[1];
  // console.log({ instanciaItem, Item });
  // console.log(Item.isItem(instanciaItem));
  // console.log(Item.isItem(344343));
  // instanciaItem.id = 99999999999;
  // console.log(instanciaItem.id);
  // console.log(listaControle);
})();
