class Personagem {
  nome;
  percentualVida = 100;

  constructor(nome) {
    this.nome = nome;
  }

  sofreuDano(dano) {
    const novaVida = this.percentualVida - dano;
    this.percentualVida = novaVida > 0 ? novaVida : 0;
  }

  usouKitMedico() {
    const novaVida = this.percentualVida + 10;
    if (novaVida < 100) {
      this.percentualVida = novaVida;
    } else {
      this.percentualVida = 100;
    }
  }
}

export default Personagem;
