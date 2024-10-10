let conceito = document.querySelector('#conceito');
let resultado = document.querySelector('#resultado');
conceito.addEventListener('input', () => {
    if(conceito.value < 50){
        resultado.textContent = 'Insuficiente';
    }else if(conceito.value < 70){
        resultado.textContent = 'Regular';
    }else if(conceito.value < 90){
        resultado.textContent = 'Bom';
    }else{
        resultado.textContent = 'Excelente';
    }    
});

