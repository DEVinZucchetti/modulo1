class Colaborador {
  cpf;
  nomeCompleto;
  salario;

  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf;
    this.nomeCompleto = nomeCompleto;
    this.salario = salario;
  }

  promover(porcentagem) {
    this.salario = this.salario * (porcentagem / 100 + 1);
  }
}

export default Colaborador;
