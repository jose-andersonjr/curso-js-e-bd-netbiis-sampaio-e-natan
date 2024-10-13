let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let acumulador = 0;
for(let numero of numeros){
    acumulador += numero;
}
console.log('Soma dos números =', acumulador);