let numero = document.querySelector('#numero');
let resultado = document.querySelector('#resultado');
numero.addEventListener('input', () => {
    if(numero.value % 2 === 0){
        resultado.textContent = 'par';
    }else{
        resultado.textContent = 'ímpar';
    }
});