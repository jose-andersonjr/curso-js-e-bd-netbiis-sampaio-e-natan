let alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [6, 5, 7] },
    { nome: "Carlos", notas: [9, 8, 10] },
    { nome: "Daniela", notas: [7, 6, 7] },
    { nome: "Eduardo", notas: [10, 9, 8] }
];
let aprovados = [];
for (let aluno of alunos) {
    let soma = 0;
    let quantidadeNotas = aluno.notas.length;
    for (let i in aluno.notas) {
        soma += aluno.notas[i];
    }
    let media = soma / quantidadeNotas;

    if (media > 7) {
        aprovados.push(aluno.nome); 
    }
}

console.log("Alunos com média acima de 7:", aprovados);
