class Item {
  // atributo estático disponível apenas em Item
  // não acessível através de instâncias
  static quantidadeItens = 0;
  id;
  titulo;

  constructor(item) {
    const { id, titulo } = item;
    this.id = id;
    this.titulo = titulo;
    Item.quantidadeItens++;
  }

  criaItem() {
    const li = document.createElement("li");
    li.innerHTML = `<p>${this.titulo}</p>`;
    return li;
  }

  // método estático disponível apenas em Item
  // não acessível através de instâncias
  static isItem(item) {
    return item instanceof Item;
  }
}

export default Item;
