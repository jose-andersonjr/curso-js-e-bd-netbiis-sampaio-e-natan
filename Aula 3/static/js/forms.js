const inputTelefone = document.querySelector('#telefone');
inputTelefone.addEventListener('input', validarTelefone);

const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('input', validarEmail);


function validarTelefone(){
    let valorLimpo = inputTelefone.value.replace(/\D/g, '');
    let arrayNumeros = valorLimpo.split('');
    let numeroFormatado = '';

    if(arrayNumeros.length > 0){
        numeroFormatado += `(${arrayNumeros.slice(0,2).join('')})`
    }
    if(arrayNumeros.length > 2){
        numeroFormatado += `${arrayNumeros.slice(2,7).join('')}`
    }
    if(arrayNumeros.length > 7){
        numeroFormatado += `-${arrayNumeros.slice(7,11).join('')}`
    }
    inputTelefone.value = numeroFormatado;

    const regex = /^\(\d{2}\)\d{5}-\d{4}$/;

    if(inputTelefone.value.length >= 1){
        const wrapper = inputTelefone.parentElement;
        wrapper.classList.remove('campo-invalido');
        if (regex.test(inputTelefone.value)) {
            validarCampo(wrapper);
        } else {
            wrapper.classList.add('campo-invalido');
            invalidarCampo(wrapper);
        }
    }
    
}

function validarEmail(){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(inputEmail.value.length >= 1){
        const wrapper = inputEmail.parentElement;
        wrapper.classList.remove('campo-invalido');
        if (regex.test(inputEmail.value)) {
            validarCampo(wrapper);
        } else {
            wrapper.classList.add('campo-invalido');
            invalidarCampo(wrapper);
        }
    }
}

function invalidarCampo(wrapper){
    const mensagemValidacao = wrapper.querySelector('#mensagem-validacao');
    if(!mensagemValidacao){
        let mensagemValidacaoHTML = document.createElement('span');
        mensagemValidacaoHTML.id = 'mensagem-validacao';
        mensagemValidacaoHTML.textContent = `O valor do campo é inválido`;
        wrapper.append(mensagemValidacaoHTML);
    }
}

function validarCampo(wrapper){
    const mensagemErro = wrapper.querySelector('#mensagem-validacao');
    if(mensagemErro){
        mensagemErro.remove();
    }
}