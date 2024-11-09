function checkLogin() {
  let nome = sessionStorage.getItem('user');
  let password = sessionStorage.getItem('password');

  if (nome && password && isLoginStillValid()) {
    let container = document.querySelector('.welcome-container');
    container.classList.remove('hide');
  } else {
    location.assign('atv01-tela-login.html');
  }
}


function isLoginStillValid(){
  let lastLogin = sessionStorage.getItem('lastLogin');
  if (!lastLogin) {
    return false;
  }
  return Date.now() - lastLogin < 60000;
}

checkLogin();
document.querySelector('#btn-logout').addEventListener('click', () => {
  sessionStorage.clear();
});