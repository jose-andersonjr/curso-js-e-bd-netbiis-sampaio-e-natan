let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 2];

let numero = 2;

console.log(`ocorrencias do ${numero} = ${contaOcorrencias(arr, numero)}`);

function contaOcorrencias(array, numero){
    return array.filter(item => item===numero).length;
}