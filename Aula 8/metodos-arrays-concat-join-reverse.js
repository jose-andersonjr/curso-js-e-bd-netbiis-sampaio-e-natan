let arr = [1, 2, 3, 4, 5, 6];

let arr2 = [7, 8, 9];

console.log(arr);
console.log(arr2);

let str = arr.join(' - ');
console.log('str = ', str);

let arrayReverso = [...arr];
arrayReverso.reverse();
console.log(arrayReverso);
console.log(arr);

Array.prototype.toReversed = function() {
    return this.slice().reverse();
}

let arrayReverso2 = arr.toReserved();
console.log('arr = ', arr);
console.log('arrReverso = ', arrayReverso2);