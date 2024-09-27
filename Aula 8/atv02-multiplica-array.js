let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let multiplicador = 2;

console.log('Array antigo = ', arr);
console.log(`Array com valores multiplicados por ${multiplicador} = ${multiplicaArray(arr, multiplicador)}`);


function multiplicaArray(array, multiplicador){
    return array.map(item => item * multiplicador);
}