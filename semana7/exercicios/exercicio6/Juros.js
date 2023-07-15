export default class Juros {
  capitalInicial;
  taxaAplicada;
  tempo;

  constructor(capitalInicial, taxaAplicada, tempo) {
    this.capitalInicial = capitalInicial;
    this.taxaAplicada = taxaAplicada;
    this.tempo = tempo;
  }

  calcularJurosSimples() {
    // J = C * i * t
    const C = this.capitalInicial;
    const i = this.taxaAplicada;
    const t = this.tempo;
    const J = C * i * t;
    return (J + C).toFixed(2);
  }

  calcularJurosCompostos() {
    // M = C * (1 + i) ** t
    const C = this.capitalInicial;
    const i = this.taxaAplicada;
    const t = this.tempo;
    const M = C * (1 + i) ** t;
    return M.toFixed(2);
  }
}
