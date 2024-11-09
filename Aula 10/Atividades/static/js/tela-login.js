
function checkPreviousLogin() {
    let user = sessionStorage.getItem('user');
    let message = document.querySelector('#login__message');
    let userInput = document.querySelector('#user');

    if (user && isLoginStillValid()) {
        message.textContent = `Bem-vindo de volta ${user}`;
        userInput.classList.add('hide');
        userInput.value = user;
    }
}

function doLogin() {
    let user = document.querySelector('#user').value;
    let password = document.querySelector('#password').value;

    if (user && password) {
        sessionStorage.setItem('user', user);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('lastLogin', Date.now());
        location.assign('atv01-tela-bem-vindo.html'); 
    }
}

function isLoginStillValid(){
    let lastLogin = sessionStorage.getItem('lastLogin');
    if (!lastLogin) {
      return false;
    }
    return Date.now() - lastLogin < 60000;
  }

checkPreviousLogin();
document.querySelector('#btn-login').addEventListener('click', doLogin);
