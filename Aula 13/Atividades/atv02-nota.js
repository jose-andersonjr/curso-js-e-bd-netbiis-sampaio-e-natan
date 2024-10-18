class Nota {
    constructor(disciplina, valor){
        this.disciplina = disciplina;
        this.valor = valor;
    }
}

class Aluno {
    notas;
    constructor(nome, matricula){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = [];
    }

    exibirDados(){
        return `Nome: ${this.nome}, Matrícula: ${this.matricula}, Media: ${this.calcularMedia()}`;
    }

    calcularMedia(){
        return this.notas.reduce((soma, nota) => soma + nota.valor, 0)/notas.length;
    }
}

let nota1 = new Nota('Matemática', 10);
let nota2 = new Nota('Português', 8);

let aluno = new Aluno('José', '123');
let notas = [nota1, nota2];
aluno.notas = notas;

console.log(aluno.exibirDados());