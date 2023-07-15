class Colaborador {
  cpf;
  nomeCompleto;
  salario;

  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;

    const cpfEhValido = Colaborador.testaCPF(this.cpf);
    if (cpfEhValido) {
      console.log("CPF válido!");
    } else {
      console.log("CPF inválido!");
      throw new Error("CPF inválido!");
    }
  }

  promover(porcentagem) {
    this.salario = this.salario * (porcentagem / 100 + 1);
  }

  // função para testar se o CPF é válido
  static testaCPF(strCPFsuja) {
    const strCPF = strCPFsuja.replaceAll(".", "").replaceAll("-", "");
    let soma = 0;
    if (strCPF == "00000000000") {
      return false;
    }
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(strCPF.substring(9, 10))) {
      return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(strCPF.substring(10, 11))) {
      return false;
    }
    return true;
  }
}

export default Colaborador;
