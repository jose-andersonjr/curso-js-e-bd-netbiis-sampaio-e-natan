
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
        let total = 0;
        if (operacao === 'somar') {
            total = somar(v1, v2);
        }
        if (operacao === 'subtrair') {
            total = subtrair(v1, v2);
        }
        if (operacao === 'dividir') {
            total = dividir(v1, v2);
        }
        if (operacao === 'multiplicar') {
            total = multiplicar(v1, v2);
        }
        resultado.value = total;
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