console.log("m1_s07_a1");

// recebe um elemento
const listaA = document.getElementById("lista-a");
// recebe um HTMLCollection (similar a Array)
const itens = document.getElementsByTagName("li");
// converte um HTMLCollection em Array
const itensArray = [...itens];

const itensEmA = listaA.getElementsByTagName("li");
console.log({ itensEmA });

// itensArray.forEach((item) => {
//   console.log(item);
// });

// console.log(listaA, itens);
//console.log({ listaA, itens });

// recebe um único elemento
const ListaB = document.querySelector("#lista-b");
// recebe um NodeList (similar a Array)
const itensListaA = document.querySelectorAll("#lista-a li");

// itensListaA.forEach((item) => {
//   console.log(item);
// });

console.log({ itensListaA });

// const li = document.createElement("li");
// li.innerHTML = "Item 4";

// listaA.appendChild(li);
//
//listaA.removeChild(itens[1]);

//itens[1].parentNode.removeChild(itens[1]);

function removeItem(item) {
  item.parentNode.removeChild(item);
}

removeItem(itens[1]);
