const inputConta = document.querySelector('#valorConta');
const inputNumeroClientes = document.querySelector('#numeroClientes');

let button = document.querySelector('#button-calcular');
if (button) {
    button.addEventListener('click', function () {
        const valorConta = parseFloat(inputConta.value);
        const numeroClientes = parseInt(inputNumeroClientes.value);

        let valorTotalConta = valorConta / numeroClientes;
        document.querySelector('#valorPorPessoa').textContent = valorTotalConta.toFixed(2);
    });

}