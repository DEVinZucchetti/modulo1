import Item from "./Item.js";

class ItemTarefa extends Item {
  concluida;

  constructor(item) {
    const { concluida, ...resto } = item;
    super(resto);
    this.concluida = concluida;
  }

  criaItem(onRemove) {
    const li = super.criaItem(onRemove);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.concluida;

    const p = li.querySelector("p");
    p.appendChild(checkbox);
    return li;
  }
}

export default ItemTarefa;
