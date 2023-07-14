import Colaborador from "./Colaborador.js";

console.log("m1_s07_e1");

const ada = new Colaborador("528.442.040-31", "Ada Lovelace", 1000);

console.log(ada.salario); // 1000

ada.promover(50);

console.log(ada.salario); // 1500
