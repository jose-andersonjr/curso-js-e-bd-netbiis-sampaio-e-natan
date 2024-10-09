let valor = 0;
let el = document.querySelector('#valor');

let buttonAdd = document.querySelector('#adicionar');
let buttonRmv = document.querySelector('#remover');

buttonAdd.addEventListener('click', () => {
    el.textContent = ++valor;
});
buttonRmv.addEventListener('click', () => {
    el.textContent = --valor;
});

