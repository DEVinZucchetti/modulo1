import Item from "./Item.js";

class ItemTarefa extends Item {
  concluida;

  constructor(item) {
    const { concluida, ...resto } = item;
    super(resto);
    this.concluida = concluida;
  }

  criaItem() {
    // aproveita código de criaItem superior
    const li = super.criaItem();

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.concluida;
    checkbox.addEventListener("change", () => {
      // inverte o valor da bandeira concluida
      this.concluida = !this.concluida;
    });

    const p = li.querySelector("p");
    p.appendChild(checkbox);
    return li;
  }
}

export default ItemTarefa;
