let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Array antigo = ', arr);
console.log('Array com números pares = ', filtraPares(arr));

function filtraPares(array){
    return array.filter(item => item % 2 === 0);
}