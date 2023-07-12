class Item {
  id;
  titulo;
  tipo;
  estado;

  constructor(item) {
    const { id, titulo, tipo, estado } = item;
    this.id = id;
    this.titulo = titulo;
    this.tipo = tipo;
    this.estado = estado;
  }

  criaItem() {
    const li = document.createElement("li");
    li.innerHTML = `<p>${this.titulo}</p>`;

    if (this.tipo === "tarefa") {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = this.estado;
      li.appendChild(checkbox);
    }

    return li;
  }
}

export default Item;
