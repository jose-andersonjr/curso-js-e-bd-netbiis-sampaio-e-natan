const arr = [1, 2, 3, 4, 5];

const maiorQue3 = arr.find(item => item > 3);
console.log('maior que 3 = ', maiorQue3);

const indiceMaiorQue3 = arr.findIndex(item => item > 3);
console.log('Indice maior que 3 = ', maiorQue3);

const temMaiorQue3 = arr.some(item => item > 3);
console.log('temMaiorQue3 3 = ', temMaiorQue3);

const temMaiorQue5 = arr.some(item => item > 5);
console.log('temMaiorQue5 = ', temMaiorQue5);

const todosMaiorQue0 = arr.every(item => item > 0);
console.log('todosMaiorQue0 = ', todosMaiorQue0);

const tem5 = arr.includes(5);
console.log('tem5 = ', tem5);


