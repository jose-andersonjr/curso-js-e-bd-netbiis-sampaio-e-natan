let titulo = document.querySelector('#titulo');
let tituloPagina = document.querySelector('#titulo-pagina');
let color = document.querySelector('#color');

titulo.addEventListener('input', () => {
    console.log(titulo.value);
    tituloPagina.textContent = titulo.value;
});

color.addEventListener('input', () => {
    document.body.style.backgroundColor = color.value;
});