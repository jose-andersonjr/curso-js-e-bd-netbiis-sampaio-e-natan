let numero;
let acumulador = 0;
let count = 0;

do {
    numero = +prompt('Insira um número: (0 para cancelar)');
    if(numero != 0 && !isNaN(numero)){
        count += 1;
        acumulador += numero;
    }
} while (numero != 0);

console.log('média dos números = ', acumulador/count);

document.querySelector('#resultado').textContent = acumulador/count;