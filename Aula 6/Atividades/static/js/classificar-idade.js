let idade = document.querySelector('#idade');
let resultado = document.querySelector('#resultado');
let faixasEtarias = ['Criança', 'Adolescente', 'Adulto', 'Idoso'];
idade.addEventListener('input', () => {
    if(idade.value < 12){
        resultado.textContent = faixasEtarias[0];
    }else if(idade.value < 18){
        resultado.textContent = faixasEtarias[1];
    }else if(idade.value < 50){
        resultado.textContent = faixasEtarias[2];
    }else{
        resultado.textContent = faixasEtarias[3];
    }
});

