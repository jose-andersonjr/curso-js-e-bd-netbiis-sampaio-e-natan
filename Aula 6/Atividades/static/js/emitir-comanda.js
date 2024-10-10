let conta = document.querySelector('#conta');
let containerResultado = document.querySelector('#container-resultado');
let resultado = document.querySelector('#resultado');
conta.addEventListener('input', () => {
    if(conta.value >= 100){
        resultado.textContent = (+conta.value*0.9).toFixed(2);
        containerResultado.querySelector('p')?.remove();
        let info = document.createElement('p');
        info.innerHTML = `Valor total do desconto: R$ ${(+conta.value*0.1).toFixed(2)}`;
        containerResultado.appendChild(info);
    }else{
        containerResultado.querySelector('p')?.remove();
        resultado.textContent = +conta.value;
        let info = document.createElement('p');
        info.innerHTML = `Por mais R$ ${100-conta.value} você ganha 10% de desconto`;
        containerResultado.appendChild(info);
    }
});