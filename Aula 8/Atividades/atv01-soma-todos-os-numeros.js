let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let acumulador = 0;
for(let numero of arr){
    acumulador += +numero;
}
console.log(acumulador);