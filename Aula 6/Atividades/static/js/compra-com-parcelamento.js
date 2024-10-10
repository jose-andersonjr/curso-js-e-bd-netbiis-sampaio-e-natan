let option = document.querySelector('#formaPagamento');
let resultado = document.querySelector('#resultado');
let valorProduto = document.querySelector('#valorProduto');

option.addEventListener('change', (el) => {
    let totalPagamento = totalPagar(el.target.value, valorProduto.value);
    resultado.textContent = `O valor total a ser pago é ${totalPagamento}`;
});

valorProduto.addEventListener('input', (el) => {
    let totalPagamento = totalPagar(option.value, el.value);
    resultado.textContent = `O valor total a ser pago é ${totalPagamento}`;
});

function totalPagar(option) {
    let valor = +valorProduto.value;
    switch (option) {
        case '1':
            return (valor * 0.9).toFixed(2);
        case '2':
            return (valor * 0.95).toFixed(2);
        case '3':
            return (valor).toFixed(2);
        case '4':
            return (valor * 1.1).toFixed(2);
        default:
            return '---';
    }
}