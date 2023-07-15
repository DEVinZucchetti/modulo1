import Juros from "./Juros.js";

console.log("m1_s07_e6");

const aplicacaoA = new Juros(10000, 0.07, 24);
// aplicacaoA simples R$ 26.800,00
const apASimples = aplicacaoA.calcularJurosSimples();
console.log(apASimples);
// aplicacaoA composto R$ 50.723,67
const apAComposto = aplicacaoA.calcularJurosCompostos();
console.log(apAComposto);

const aplicacaoB = new Juros(10000, 0.15, 10);
// aplicacaoB simples R$ 25.000,00
const apBSimples = aplicacaoB.calcularJurosSimples();
console.log(apBSimples);
// aplicacaoB composto R$ 40.455,58
const apBComposto = aplicacaoB.calcularJurosCompostos();
console.log(apBComposto);
