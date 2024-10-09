let valor = 0;
let el = document.querySelector('#valor');

function adicionar(){
    el.textContent = ++valor;
}

function remover(){
    el.textContent = --valor;
}
