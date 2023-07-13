import Item from "./Item.js";

class ItemTarefa extends Item {
  concluida;

  constructor(item) {
    const { concluida, ...resto } = item;
    super(resto);
    this.concluida = concluida;
  }

  criaItem() {
    const li = document.createElement("li");
    li.innerHTML = `<p>${this.titulo}</p>`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.concluida;

    li.appendChild(checkbox);
    return li;
  }
}

export default ItemTarefa;
