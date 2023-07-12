class Item {
  id;
  titulo;

  constructor(item) {
    const { id, titulo } = item;
    this.id = id;
    this.titulo = titulo;
  }

  criaItem() {
    const li = document.createElement("li");
    li.innerHTML = this.titulo;
    return li;
  }
}

export default Item;
