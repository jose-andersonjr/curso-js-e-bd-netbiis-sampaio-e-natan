const button = document.querySelector('#button-calcular');
const resultado = document.querySelector('#media-resultado');

if(button){
    button.addEventListener('click', function(){
        let nota1 = parseFloat(document.querySelector('#nota1').value);
        let nota2 = parseFloat(document.querySelector('#nota2').value);
        let nota3 = parseFloat(document.querySelector('#nota3').value);
        let nota4 = parseFloat(document.querySelector('#nota4').value);
        if(nota1 && nota2 && nota3 && nota4){
            console.log(nota1);
            console.log(nota2);
            console.log(nota3);
            console.log(nota4);
            let media = ((nota1+nota2+nota3+nota4)/4).toFixed(2);
            resultado.textContent = media;
        }
    });
}
