const valorProduto = document.querySelector('#valorProduto');
if(valorProduto){
    valorProduto.addEventListener('input', function(){
        let valor = valorProduto.value;
        document.querySelector('#valorAVista').textContent = (valor * 0.9).toFixed(2);
        document.querySelector('#valorDuasVezes').textContent = (valor * 1.01).toFixed(2);
        document.querySelector('#valorTresVezes').textContent = (valor * 1.013).toFixed(2);
    });
}