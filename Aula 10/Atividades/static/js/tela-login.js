function checkPreviousLogin(){
    let user = sessionStorage.getItem('user');
    let message = document.querySelector('#login__message');
    let userInput = document.querySelector('#user');
    if(user){
        message.textContent = `Bem-vindo de volta ${user}`;
        userInput.classList.add('hide');
        userInput.value = user;
    }
}

function doLogin() {
    let user = document.querySelector('#user').value;
    let password = document.querySelector('#password').value;

    if(user && password){
        sessionStorage.setItem('user', user);
        sessionStorage.setItem('password', password);

        location.assign('atv01-tela-bem-vindo.html');
    }
}

checkPreviousLogin();
