console.log("m1_s07_a1");

// EXEMPLOS SELETORES

// recebe um elemento
const listaA = document.getElementById("lista-a");
// recebe um HTMLCollection (similar a Array)
const itens = document.getElementsByTagName("li");
// converte um HTMLCollection em Array
const itensArray = [...itens];

const itensEmA = listaA.getElementsByTagName("li");
//console.log({ itensEmA });

// itensArray.forEach((item) => {
//   console.log(item);
// });

// console.log(listaA, itens);
//console.log({ listaA, itens });

// recebe um único elemento
//const ListaB = document.querySelector("#lista-b");
// recebe um NodeList (similar a Array)
const itensListaA = document.querySelectorAll("#lista-a li");

// itensListaA.forEach((item) => {
//   console.log(item);
// });

//console.log({ itensListaA });

// const li = document.createElement("li");
// li.innerHTML = "Item 4";

// listaA.appendChild(li);
//listaA.removeChild(itens[1]);
//itens[1].parentNode.removeChild(itens[1]);

function removeItem(item) {
  item.parentNode.removeChild(item);
}

//removeItem(itens[1]);

// EXEMPLOS EVENTOS

const formulario = document.querySelector("#formulario");
const campoTitulo = document.getElementById("titulo-item");

let itensLista = ["Item A", "Item B", "Item C"];

function atualizaTela() {
  listaA.innerHTML = "";

  itensLista.forEach((item) => {
    const novoItem = criaItem(item);
    listaA.appendChild(novoItem);
  });
}

function removeItemDaLista(itemARemover) {
  itensLista = itensLista.filter((item) => item !== itemARemover);
}

function criaItem(item) {
  const novoItem = document.createElement("li");
  novoItem.innerHTML = `<p>${item}</p>`;

  const botaoRemover = document.createElement("button");
  botaoRemover.innerHTML = "🗑️";
  botaoRemover.addEventListener("click", () => {
    removeItemDaLista(item);
    atualizaTela();
  });

  novoItem.appendChild(botaoRemover);
  return novoItem;
}

formulario.addEventListener("submit", (event) => {
  // prevenindo que ocorra o comportamento padrão do navegador
  event.preventDefault();
  // evitando que o evento se propague a outros listeners
  event.stopPropagation();

  // const formData = new FormData(event.target);
  // const titulo = formData.get("titulo");
  const titulo = campoTitulo.value;

  itensLista.push(titulo);

  atualizaTela();
  campoTitulo.value = "";
  //console.log("Titulo: ", titulo);
});

atualizaTela();

//botaoAdiciona.addEventListener("click", clickAdiciona);
// remove um escutador de evento
// botaoAdiciona.removeEventListener("click", clickAdiciona);
