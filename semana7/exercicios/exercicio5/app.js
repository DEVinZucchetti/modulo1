import CalculadoraDeArea from "./CalculadoraDeArea.js";

console.log("m1_s07_e5");

const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(areaQA); // 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(areaTB); // 28

const retC = new CalculadoraDeArea("retangulo", 4, 6);
const areaRC = retC.calcular();
console.log(areaRC); // 24
