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
    li.innerHTML = `<p>${this.titulo}</p>`;
    return li;
  }
}

export default Item;
