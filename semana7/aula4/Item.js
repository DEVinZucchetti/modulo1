class Item {
  // atributo estático disponível apenas em Item
  // não acessível através de instâncias
  static quantidadeItens = 0;
  #id;
  titulo;

  constructor(item) {
    const { id, titulo } = item;
    this.#id = id;
    this.titulo = titulo;
    Item.quantidadeItens++;
  }

  // métoro getter tem valor acessado como um atributo comum
  get id() {
    return this.#id;
  }

  // métoro setter recebe valor como um atributo comum
  set id(novoId) {
    this.#id = novoId;
  }

  // recebe uma função "callback" por parâmetro
  criaItem() {
    const li = document.createElement("li");
    li.innerHTML = `<p>${this.titulo}</p>`;

    const botao = document.createElement("button");
    botao.className = "botao-remover";
    botao.innerHTML = "🗑️";

    li.appendChild(botao);
    return li;
  }

  // método estático disponível apenas em Item
  // não acessível através de instâncias
  static isItem(item) {
    return item instanceof Item;
  }
}

export default Item;
