console.log("m1_s07_a3");

const elemLista = document.getElementById("lista-itens");

const dadosLista = ["Batata", "Arroz", "Ervilha"];

function criaItem(item) {
  const li = document.createElement("li");
  li.innerHTML = item;
  return li;
}

function atualizaTela() {
  elemLista.innerHTML = "";

  dadosLista.forEach((item) => {
    const elemItem = criaItem(item);
    elemLista.appendChild(elemItem);
  });
}

atualizaTela();
