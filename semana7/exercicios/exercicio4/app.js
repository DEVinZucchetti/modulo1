import Cachorro from "./Cachorro.js";
import Gato from "./Gato.js";

console.log("m1_s07_e4");

const snoopy = new Cachorro("snoopy", 10);

console.log(snoopy.som); // "latido"

const frajola = new Gato("frajola", 8);

console.log(frajola.som); // "miado"
