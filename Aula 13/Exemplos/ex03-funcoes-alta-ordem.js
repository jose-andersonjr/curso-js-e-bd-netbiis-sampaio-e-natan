function aplicarOperacao(a, b, operacao){
    return operacao(a, b);
}

function somar(a, b){
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

let resultado1 = aplicarOperacao(1, 2, somar);
let resultado2 = aplicarOperacao(1, 2, subtrair);
console.log(resultado1);
console.log(resultado2);