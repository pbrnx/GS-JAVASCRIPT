alert('Seja bem-vindo ao projeto Agrisense!');

//carrousel de imagens header

document.addEventListener('DOMContentLoaded', function() {
    var imageUrls = [
      "./images/imagem-carroussel-1.jpg",
      "./images/imagem-carroussel-2.jpg",
      "./images/imagem-carroussel-3.jpg"
    ];

 var currentIndex = 0;
    var backgroundElement = document.querySelector('.background-image');
    var nextBackgroundElement = document.createElement('div');
    nextBackgroundElement.classList.add('background-image', 'next');
function changeBackgroundImage() {
      currentIndex++;
      if (currentIndex >= imageUrls.length) {
        currentIndex = 0;
      }
    
 nextBackgroundElement.style.backgroundImage = "url(" + imageUrls[currentIndex] + ")";
      backgroundElement.parentNode.appendChild(nextBackgroundElement);

      setTimeout(function() {
        backgroundElement.classList.add('slide-out');
        nextBackgroundElement.classList.add('slide-in');
      });
setTimeout(function() {
        backgroundElement.style.backgroundImage = "url(" + imageUrls[currentIndex] + ")";
        backgroundElement.classList.remove('slide-out');
        nextBackgroundElement.classList.remove('slide-in');
        backgroundElement.parentNode.removeChild(nextBackgroundElement);
      }, 1000);
    }

    setInterval(changeBackgroundImage, 3000);
  });
//login de usuário

const validar = document.getElementById("botaoLogin");
const userLogin = document.getElementById("inserirUser");
const senhaLogin = document.getElementById("inserirSenha");
validar.addEventListener('click',()=>{
  let user = userLogin.value.trim();
  let senha = senhaLogin.value.trim();
  
 if(user === 'Admin' && senha === '123456'){
    location.href = 'https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021';
  }

  else {
    alert('Usuário e/ou senha incorretos')
  }
});

var datetimeElement = document.getElementById('datetime');
function updateDateTime() {
  var currentDateTime = new Date();
  var formattedDateTime = currentDateTime.toLocaleString();
  datetimeElement.textContent = formattedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);

//dark mode
const darkModeButton = document.getElementById("darkmode");
const menu = document.getElementById("content");
let isDarkMode = parseInt(localStorage.getItem("isDarkMode")) || 0;

updateDarkMode();

darkModeButton.addEventListener('click', () => {


  //comparação para alternar usando o mesmo botão
  isDarkMode = isDarkMode ? 0 : 1;
  updateDarkMode();
  localStorage.setItem("isDarkMode", isDarkMode);
});

function updateDarkMode() {
  if (isDarkMode) {
    document.body.style.backgroundColor = 'rgb(10, 10, 15)';
    document.body.style.color = 'white';
    menu.style.textShadow = 'none';
    document.body.style.borderColor = 'white';
    darkModeButton.textContent = '☀';
    darkModeButton.style.backgroundColor = 'white';
    darkModeButton.style.color = 'black';
  } 
  
  else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    menu.style.textShadow = '-1px -1px 0 rgb(255, 255, 255), 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
    darkModeButton.textContent = '☽';
    darkModeButton.style.backgroundColor = 'rgb(10, 10, 15)';
    darkModeButton.style.color = 'white';
  }
}
