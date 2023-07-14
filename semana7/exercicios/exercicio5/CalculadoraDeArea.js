class CalculadoraDeArea {
  tipo;
  base;
  altura;

  constructor(tipo, base, altura) {
    this.tipo = tipo;
    this.base = base;
    this.altura = altura;
  }

  // com switch
  calcular() {
    let area;

    switch (this.tipo) {
      case "triangulo":
        area = (this.base * this.altura) / 2;
        break;

      case "quadrado":
      case "retangulo":
        area = this.base * this.altura;
        break;

      default:
        area = null;
    }

    return area;
  }

  // com if
  calcularIf() {
    let area;

    if (this.tipo === "triangulo") {
      area = (this.base * this.altura) / 2;
      // } else if (this.tipo === "quadrado" || this.tipo === "retangulo") {
    } else if (["quadrado", "retangulo"].includes(this.tipo)) {
      area = this.base * this.altura;
    } else {
      area = null;
    }

    return area;
  }
}

export default CalculadoraDeArea;
