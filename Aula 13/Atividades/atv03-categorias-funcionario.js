class Funcionario {
    constructor(nome, cpf, email) {
      this.nome = nome;
      this.cpf = cpf;
      this.email = email;
    }
  
    calcularSalario() {}
  }
  
  class FuncionarioHorista extends Funcionario {
    constructor(nome, cpf, email, horasTrabalhadas, valorHora) {
      super(nome, cpf, email);
      this.horasTrabalhadas = horasTrabalhadas;
      this.valorHora = valorHora;
    }
  
    calcularSalario() {
      return this.horasTrabalhadas * this.valorHora;
    }
  }
  
  class FuncionarioMensalista extends Funcionario {
    constructor(nome, cpf, email, salarioBase, desconto) {
      super(nome, cpf, email);
      this.salarioBase = salarioBase;
      this.desconto = desconto;
    }
  
    calcularSalario() {
      return this.salarioBase * (1 - this.desconto);
    }
  }
  
  const funcionarioHorista = new FuncionarioHorista('João', '12345678901', 'joao@email.com', 160, 20);
  const funcionarioMensalista = new FuncionarioMensalista('Maria', '98765432109', 'maria@email.com', 2500, 0.1);
  
  console.log('Salário do funcionário horista:', funcionarioHorista.calcularSalario());
  console.log('Salário do funcionário mensalista:', funcionarioMensalista.calcularSalario());