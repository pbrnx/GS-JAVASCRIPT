//carrossel de imagens, troca em 2.5s
document.addEventListener('DOMContentLoaded', function () {
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

      setTimeout(function () {
         backgroundElement.classList.add('slide-out');
         nextBackgroundElement.classList.add('slide-in');
      });

      setTimeout(function () {
         backgroundElement.style.backgroundImage = "url(" + imageUrls[currentIndex] + ")";
         backgroundElement.classList.remove('slide-out');
         nextBackgroundElement.classList.remove('slide-in');
         backgroundElement.parentNode.removeChild(nextBackgroundElement);
      }, 1000);
   }

   setInterval(changeBackgroundImage, 2500);
});


//chamando os parágrafos
const p1Element = document.getElementById('agrisense');
const p2Element = document.getElementById('tecnologias');
const p3Element = document.getElementById('beneficios');
const p4Element = document.getElementById('casos');
const p5Element = document.getElementById('educa');
const p6Element = document.getElementById('parcerias');
const p7Element = document.getElementById('cadastro');

//item1
p1Element.addEventListener("mouseover", () => {
   p1Element.style.transition = 'font-size 0.1s ease';
   p1Element.style.fontSize = "30px"
});

p1Element.addEventListener("mouseleave", () => {
   p1Element.style.fontSize = "25px";
});


//item 2

p2Element.addEventListener("mouseover", () => {
   p2Element.style.transition = 'font-size 0.1s ease'
   p2Element.style.fontSize = "30px";
});

p2Element.addEventListener("mouseleave", () => {
   p2Element.style.fontSize = "25px";

});


//item 3

p3Element.addEventListener("mouseover", () => {
   p3Element.style.transition = 'font-size 0.1s ease'
   p3Element.style.fontSize = "30px";
});

p3Element.addEventListener("mouseleave", () => {
   p3Element.style.fontSize = "25px";
});


//item 4

p4Element.addEventListener("mouseover", () => {
   p4Element.style.transition = 'font-size 0.1s ease'
   p4Element.style.fontSize = "30px";
});

p4Element.addEventListener("mouseleave", () => {
   p4Element.style.fontSize = "25px";

});


//item 5

p5Element.addEventListener("mouseover", () => {
   p5Element.style.transition = 'font-size 0.1s ease'
   p5Element.style.fontSize = "30px";
});

p5Element.addEventListener("mouseleave", () => {
   p5Element.style.fontSize = "25px";

});

//item 6

p6Element.addEventListener("mouseover", () => {
   p6Element.style.transition = 'font-size 0.1s ease'
   p6Element.style.fontSize = "30px";
});

p6Element.addEventListener("mouseleave", () => {
   p6Element.style.fontSize = "25px";

});

p7Element.addEventListener("mouseover", () => {
   p7Element.style.transition = 'font-size 0.1s ease'
   p7Element.style.fontSize = "30px";
});

p7Element.addEventListener("mouseleave", () => {
   p7Element.style.fontSize = "25px";

});


//scrollar para parte desejada
p1Element.addEventListener("click", scrollToContent);
p2Element.addEventListener("click", scrollToContent);
p3Element.addEventListener("click", scrollToContent);
p4Element.addEventListener("click", scrollToContent);
p5Element.addEventListener("click", scrollToContent);
p6Element.addEventListener("click", scrollToContent);
p7Element.addEventListener("click", scrollToContent);


//função para scrollar, offset por conta do header com posição fixa
function scrollToContent() {
   var contentElementId = this.getAttribute("id") + "P";
   var contentElement = document.getElementById(contentElementId);
   var windowHeight = window.innerHeight;
   var offset = contentElement.getBoundingClientRect().top + window.scrollY - (windowHeight * 0.38);
   window.scrollTo({
      top: offset,
      behavior: 'smooth'
   });
}


//botao de voltar ao topo
var backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function () {
   if (window.pageYOffset > 0) {
      backToTopBtn.classList.remove('hidden');
   } else {

      backToTopBtn.classList.add('hidden');
   }
});


backToTopBtn.addEventListener('click', function () {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});

//formularios
//variáveis

const inserirNome = document.getElementById("name");
const inserirTelefone = document.getElementById("phone");
const inserirEmail = document.getElementById("email");
const inserirMensagem = document.getElementById("message");
const enviar = document.getElementById("botaoEnviar");

//parse int para salvar informações localmente

//validar nome
inserirNome.addEventListener("input", function () {
   let nome = inserirNome.value.trim();
   if (nome.length < 2) {
      inserirNome.style.borderColor = 'red';
   } else {
      inserirNome.style.borderColor = 'green';
   }
});


//validar telefone

inserirTelefone.addEventListener("input", function () {
   const telefone = inserirTelefone.value.trim();

   if (/^\d{2}\d*$/.test(telefone) && telefone.length === 11) {

      inserirTelefone.style.borderColor = 'green';
   } else {
      inserirTelefone.style.borderColor = 'red';
   }

});

//validar email
inserirEmail.addEventListener("input", function () {
   let email = inserirEmail.value.trim();

   if (email.length < 5 || !email.includes('@') || !email.includes('.com')) {
      inserirEmail.style.borderColor = 'red';
   } else {
      inserirEmail.style.borderColor = 'green';
   }
});


inserirMensagem.addEventListener("input", function () {
   let mensagem = inserirMensagem.value.trim();
   inserirMensagem.value = mensagem.slice(0, 500);

   if (mensagem.length < 5) {
      inserirMensagem.style.borderColor = 'red';

   } else {
      inserirMensagem.style.borderColor = 'green';
   }
});


// botao de validar
enviar.addEventListener('click', () => {
   const telefone = inserirTelefone.value.trim();
   let telefoneValido = telefone.length === 11;
   let nomeValido = inserirNome.value.trim().length >= 2;
   let emailValido = inserirEmail.value.trim().length >= 5 && inserirEmail.value.includes('@') && inserirEmail.value.includes('.com');
   let mensagemValida = inserirMensagem.value.trim().length >= 5;

   if (nomeValido && telefoneValido && emailValido && mensagemValida) {
      alert('Obrigado por se cadastrar!');
   } else {
      alert("Verifique o formulário e preencha todos os campos corretamente!");
   }
});


//login de usuário

const validar = document.getElementById("botaoLogin");
const userLogin = document.getElementById("inserirUser");
const senhaLogin = document.getElementById("inserirSenha");

validar.addEventListener('click', () => {
   let user = userLogin.value.trim();
   let senha = senhaLogin.value.trim();

   if (user === 'Admin' && senha === '123456') {
      location.href = 'https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021';
   } else {
      alert('Usuário e/ou senha incorretos')
   }
});

//função de data e hora
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
   } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      menu.style.textShadow = '-1px -1px 0 rgb(255, 255, 255), 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
      darkModeButton.textContent = '☽';
      darkModeButton.style.backgroundColor = 'rgb(10, 10, 15)';
      darkModeButton.style.color = 'white';
   }
}

alert('Seja bem-vindo ao projeto Agrisense!');