function somar(a, b) {
    return a + b;
}

function calcularIMC(peso, altura) {
    let resultado = peso / (altura**2);
    return resultado.toFixed(2);
}

function mensagemBoasVindas(){
    console.log('=======================================');
    console.log('Bem-vindo ao nosso curso de JavaScript');
    console.log('=======================================');
}

console.log(somar(10, 20));
console.log(calcularIMC(74, 1.70));
mensagemBoasVindas();