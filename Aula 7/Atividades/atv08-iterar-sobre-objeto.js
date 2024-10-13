let pessoa = {
    nome: "José Anderson",
    idade: 23,
    cidade: "Belém",
    profissao: "Desenvolvedor",
    estadoCivil: "Solteiro"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}