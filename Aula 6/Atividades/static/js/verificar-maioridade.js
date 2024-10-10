let nota = document.querySelector('#nota');
let containerResultado = document.querySelector('#container-resultado');
let resultado = document.querySelector('#resultado');
nota.addEventListener('input', () => {
    if(nota.value >= 7 ){
        resultado.textContent = 'Aprovado';
        containerResultado.querySelector('img')?.remove();
    }else{
        containerResultado.querySelector('img')?.remove();
        resultado.textContent = 'Reprovado';
        let img = document.createElement('img');
        img.src = 'https://imgb.ifunny.co/images/f1f06dc94c9f9f2c3235c7da8e3bdbb631d4258c8d1dcf175f3f34064bdd2b56_1.webp';
        img.width = '180';
        containerResultado.appendChild(img);
    }
});