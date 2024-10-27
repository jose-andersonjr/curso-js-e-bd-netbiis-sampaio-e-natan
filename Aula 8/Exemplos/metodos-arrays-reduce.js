const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log('soma = ', soma);


// Esse código faz o mesmo que o código de baixo
let acumulador = 0;
for (let valorAtual of arr) {
    acumulador += valorAtual;
}
console.log(acumulador);