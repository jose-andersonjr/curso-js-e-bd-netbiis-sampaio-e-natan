const anonima = function(){
    console.log('Função anônima');
}

anonima();

//Arrow function 
let arrow = () => {
    console.log('Arrow function');
}

arrow();

let somar = (a, b) => a + b;
let calcularIMC = (peso, altura) => (peso / (altura**2)).toFixed(2);

console.log(somar(10, 20));
console.log(calcularIMC(74, 1.70));