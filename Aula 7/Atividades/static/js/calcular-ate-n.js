let lastNumDiv = document.querySelector('#lastNum');
let resultado = document.querySelector('#resultado');
let acumulador = 0;
let count = 1;

lastNumDiv.addEventListener('input', (el) => {  
    somatoria(el.target.value);
});

function somatoria(lastNumber){
    if(lastNumber < 1){
        throw Error('O número inserido não pode ser menor que 1');
    }
    while(count <= lastNumber){
        acumulador += count;
        count++;
    }
    resultado.textContent = `O valor final da somatório de 1 a ${lastNumber} é ${acumulador}`;
}