
let numero = document.querySelector('#numero');
let tabela = document.querySelector('#tabela')

numero.addEventListener('input', (el) => {
    let value = +el.target.value;
    if(!isNaN(value)){
        tabela.innerHTML = '';
        for (let index = 1; index <= 10; index++) {
            tabela.innerHTML += `
                        <tr>
                            <td>${value} x ${index}</td>
                            <td>${value*index}</td>
                        </tr>`;
        }
    }
});