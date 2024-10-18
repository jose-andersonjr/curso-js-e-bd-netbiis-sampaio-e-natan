function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

let volume = 0;
function aumentarVolume(incremento){
    volume += incremento;
    return volume;
}

console.log(calcularIMC(1, 2) === calcularIMC(1, '2'));
console.log(aumentarVolume(2) === aumentarVolume(2));
