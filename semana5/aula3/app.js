console.log("m1s05a2");

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
    console.log("zero");
    break;

  case 1:
    console.log("um");
    break;

  case 2:
    console.log("dois");
    break;

  default:
    console.log("outro");
}
