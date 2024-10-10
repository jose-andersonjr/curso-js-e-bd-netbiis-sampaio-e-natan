
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => realizarCalculo(button));
});

function realizarCalculo(button) {
    let v1 = +document.querySelector('#value1').value.replace(',', '.');
    let v2 = +document.querySelector('#value2').value.replace(',', '.');
    if (v1.length === 0 || v2.length === 0 || !/^-?\d+(\.\d+)?$/.test(v1 + v2)) {
        resultado.value = 'Insira valores válidos';
    } else {
        let resultado = document.querySelector('#resultado');
        let operacao = button.id;
        resultado.value = calcular(v1, v2, operacao);
    }
}

function calcular(v1, v2, operacao) {
    switch (operacao) {
        case 'somar':
            return somar(v1, v2);
        case 'subtrair':
            return subtrair(v1, v2);
        case 'dividir':
            return dividir(v1, v2);
        case 'multiplicar':
            return multiplicar(v1, v2);
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}