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
console.log(retorno);

// exemplo função efemera
(function () {
  console.log("Funcao de uso unico!");
})();

// comparação arrow function
function funcaoComum(a) {
  return "Funcao comum. " + a;
}

console.log(funcaoComum("Romeu"));

const funcaoArrow = (a) => {
  return "Funcao arrow. " + a;
};
// equivalente a
//const funcaoArrow = a => "Funcao arrow. " + a;

console.log(funcaoArrow("Isaac"));
