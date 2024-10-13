
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => realizarCalculo(button));
});

function realizarCalculo(button) {
    let v1 = document.querySelector('#value1').value.replace(',', '.');
    let v2 = document.querySelector('#value2').value.replace(',', '.');
    if (typeof v1 !== 'number' || typeof v2 !== 'number') {
        throw new TypeError('Um ou todos os valores inseridos não são números');
    } else {
        let resultado = document.querySelector('#resultado');
        let operacao = button.id;
        try {
            resultado.value = calcular(v1, v2, operacao);
        } catch (error) {
            console.error('Um erro foi encontrado ao executar a função =', error.message);
        }
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
    if (b === 0){
        throw new Error('Não é possível dividir por zero');
    }
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}