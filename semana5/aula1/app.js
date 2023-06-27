console.log("m1s05a1");

// exemplo
// f(x, y) = x * 2 - y
// f(2, 3) = 2 * 2 - 3
// f(2, 3) = 4 - 3
// f(2, 3) = 1

function f(x, y) {
  const resultado = x * 2 - y;
  return resultado;
}

const retorno = f(2, 3);
//console.log(retorno);

// exemplo função efemera
(function () {
  //console.log("Funcao de uso unico!");
})();

// comparação arrow function
function funcaoComum(a) {
  return "Funcao comum. " + a;
}

//console.log(funcaoComum("Romeu"));

const funcaoArrow = (a) => {
  return "Funcao arrow. " + a;
};
// equivalente a
//const funcaoArrow = a => "Funcao arrow. " + a;
//console.log(funcaoArrow("Isaac"));

function executaEssa(funcaoExterna) {
  const retorno = funcaoExterna(3);
  console.log(retorno);
}

// exemplo equivalencias
// funcao comum passada por parametro
executaEssa(function (a) {
  return a * 2;
});
// arrow funcation passada por parametro
executaEssa((a) => a * 2);

// maneira depreciada de declarar variaveis
var a = 5; // pode ser reatribuida

// padrao atual de declaração de variáveis
const b = 6; // não pode ser reatribuida
let c = 7; // pode ser reatribuida

a = 9;
c = 8;

console.log(a, b, c);
