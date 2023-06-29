console.log("m1s05a3");

// Estruturas CONDICIONAIS

// Valores equivalentes a FALSO
// false, 0, "", null, undefined, NaN

// Valores equivalentes a TRUE
// true, numeros (posiotivos ou negativos), "abc", [], {}

// Exemplo if simples
const idadeA = 20;

if (idadeA >= 18) {
  //console.log("É maior de idade");
}

// Exemplo if com else
const idadeB = 17;

if (idadeB >= 18) {
  //console.log("É maior de idade");
} else {
  //console.log("É menor de idade");
}

// Exemplo else if
const idadeC = 20;

if (idadeC === 18) {
  //console.log("Acabou de ser maior idade");
} else if (idadeC > 18) {
  //console.log("É maior de idade");
} else {
  //console.log("É menor de idade");
}

// Exemplo vários casos mesma variável
const numeroA = 1;

if (numeroA === 0) {
  //console.log("zero");
} else if (numeroA === 1) {
  //console.log("um");
} else if (numeroA === 2) {
  //console.log("dois");
} else {
  //console.log("outro");
}

// equivalente em switch
const numeroB = 1;

switch (numeroB) {
  case 0:
    //console.log("zero");
    break;

  case 1:
    //console.log("um");
    break;

  case 2:
    //console.log("dois");
    break;

  default:
  //console.log("outro");
}

// Estruturas de REPETIÇÃO

// Exemplo for até 10
// ([inicialização]; [condição]; [incremento])
for (let i = 0; i < 10; i++) {
  //console.log(i);
}

// Exemplo for em array
const listaA = ["banana", "mamao", "abacate"];

for (let i = 0; i < listaA.length; i++) {
  //console.log(`${i}: ${listaA[i]}`);
}

// Exemplo while
let entradaA = "";

// while (entradaA !== "fim") {
//   entradaA = prompt("Digite um comando:");
//   console.log(entradaA);
// }

// Exemplo do while
let entradaB = "";

// do {
//   entradaB = prompt("Digite um comando:");
//   console.log(entradaB);
// } while (entradaB !== "fim");

// Exemplo forEach
const listaB = ["banana", "mamao", "abacate"];

listaB.push("manga");

// exemplo de função comum equivalente
// function nomeDaFuncao(item, indice, lista) {
//   console.log(item, indice, lista);
// }

// forEach com arrow function
listaB.forEach((item, indice, lista) => {
  //console.log(item, indice, lista);
});

// Exemplo template literals
const nome = "Romeu";
const textoA = "Olá, " + nome + "!";
const textoB = `Olá, ${nome}!`;

//console.log(textoA);
//console.log(textoB);

// Mais REST & SPREAD com variáveis

// vetores SPREAD
const vetA = [1, 2, 3];
const vetB = [4, 5, 6];

const vetC = [0, ...vetB, 9, ...vetA];

//console.log(vetC);

// objetos SPREAD
const objA = { a: 1, b: 2, c: 3 };
const objB = { c: 24, d: 25, e: 26 };

const objC = { ...objA, ...objB, a: 999 };

//console.log(objC);

// vetor DESTRUCTURING

const coordA = [4, 7, 8];

// const x = coordA[0];
// const y = coordA[1];
// const z = coordA[2];

const [xx, yy, zz] = coordA;

//console.log(x, y, z);

// objeto DESTRUCTURING

const coordB = { x: 4, y: 7, z: 8 };

// const x = coordA.x;
// const y = coordA.y;
// const z = coordA.z;

const { x, y, z } = coordB;

console.log(x, y, z);
