import Usuario from "./Usuario.js";

console.log("m1_s07_e7");

const formLogin = document.getElementById("form-login");
const campoEmail = document.getElementById("campo-email");
const campoSenha = document.getElementById("campo-senha");
const pMensagem = document.getElementById("mensagem");

const usuarios = [
  new Usuario("Romeu", "romeu@dih.br", "123"),
  new Usuario("Isaac", "isaac@dih.br", "321"),
];

console.log(usuarios);

function realizaLogin(evento) {
  evento.preventDefault();
  const email = campoEmail.value;
  const senha = campoSenha.value;

  const usuario = usuarios.find((usuario) => {
    return usuario.email === email;
  });

  if (usuario && usuario.autenticar(email, senha)) {
    pMensagem.innerHTML = `Olá, ${usuario.nome}!`;
    campoEmail.value = "";
    campoSenha.value = "";
  } else {
    pMensagem.innerHTML = "Credenciais inválidas!";
  }

  // alternativa
  // const usuario = usuarios.find((usuario) => {
  //   return usuario.autenticar(email, senha)
  // });

  // if (usuario) {
  //   pMensagem.innerHTML = `Olá, ${usuario.nome}!`;
  //   campoEmail.value = "";
  //   campoSenha.value = "";
  // } else {
  //   pMensagem.innerHTML = "Credenciais inválidas!";
  // }
}

formLogin.addEventListener("submit", realizaLogin);
