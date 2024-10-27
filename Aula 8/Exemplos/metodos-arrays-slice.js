const arr = [1, 2, 3, 4, 5, 6];

const subArr = arr.slice(1,4);
console.log(arr);
console.log(subArr);

// Remove os elementos de um array e opcionalmente adiciona os que não existem
const removed = arr.splice(1, 3, 7, 8, 9);
console.log(removed);
console.log(arr);
