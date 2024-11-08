function checkLogin() {
  let nome = sessionStorage.getItem('user');
  let password = sessionStorage.getItem('password');

  if (nome && password) {
    let container = document.querySelector('.welcome-container');
    container.classList.remove('hide');
  } else {
    location.assign('atv01-tela-login.html');
  }
}

function doLogout(){
  sessionStorage.clear();
}

checkLogin();

