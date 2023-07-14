import Fatura from "./Fatura.js";

console.log("m1_s07_e2");

const melao = new Fatura(123, "Melão", 2, 3);

const valor = melao.obterValorTotal();

console.log(valor); // 6
console.log(melao.valorTotal); // 6
