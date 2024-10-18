const usuarios = [
    { nome: "Alice", email: "alice@example.com", idade: 15, telefone: "(11) 91234-5678" },
    { nome: "Bruno", email: "bruno@example.com", idade: 30, telefone: "(21) 98765-4321" },
    { nome: "Carla", email: "carla@example.com", idade: 22, telefone: "(31) 99876-5432" },
    { nome: "Diego", email: "diego@example.com", idade: 18, telefone: "(41) 91234-5678" },
    { nome: "Eva", email: "eva@example.com", idade: 35, telefone: "(51) 98765-1234" }
];

let maiores18Anos = processarList(usuarios, getMaioresQue18Anos);
console.log('Usuários com mais de 18 anos = ', maiores18Anos);
console.log('Nome e idade dos usuários com mais de 18 anos = ', processarList(maiores18Anos, getNomeAndIdadeAsString));
console.log('Lista ordenada pela idade = ', processarList(maiores18Anos, getListaOrdenada));
console.log('Media de idade dos usuarios filtrados = ', processarList(maiores18Anos, calcularMediaIdade));
                                                        
function processarList(lista, tipoManipulacao){
    return tipoManipulacao(lista);
}

function getMaioresQue18Anos(lista){
    return lista.filter(user => user.idade > 18);
}

function getNomeAndIdadeAsString(lista){
    return lista.map(user => `(${user.nome}, ${user.idade})`).join(' ');
}

function getListaOrdenada(lista){
    return getNomeAndIdadeAsString(lista.sort((a, b) => +a.idade - b.idade)); 
}

function calcularMediaIdade(lista){
    return lista.reduce((soma, usuario) => soma + usuario.idade, 0) / lista.length;
}