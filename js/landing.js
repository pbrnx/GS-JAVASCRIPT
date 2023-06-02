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
//validar nome
inserirNome.addEventListener("input", function() {
  let nome = inserirNome.value.trim(); 
  if (nome.length < 2) {
    inserirNome.style.borderColor = 'red'; 
  } 
  else {
    inserirNome.style.borderColor = 'green'; 
  }
});
//validar telefone

inserirTelefone.addEventListener("input", function() {
  const telefone = inserirTelefone.value.trim(); 

  if (/^\d{2}\d*$/.test(telefone) && telefone.length === 11) {
    
    inserirTelefone.style.borderColor = 'green'; 
  } 
  else {
    inserirTelefone.style.borderColor = 'red'; 
  }

});
//validar email
inserirEmail.addEventListener("input", function() {
  let email = inserirEmail.value.trim(); 

  if (email.length < 5 || !email.includes('@')) {
    inserirEmail.style.borderColor = 'red'; 
  } 

  else {
    inserirEmail.style.borderColor = 'green'; 
  }
});
//commit mauricio 4
inserirMensagem.addEventListener("input", function() {
  let mensagem = inserirMensagem.value.trim(); 
  inserirMensagem.value = mensagem.slice(0, 500);

  if (mensagem.length < 5) {
    inserirMensagem.style.borderColor = 'red'; 
  
  }
  else {
    inserirMensagem.style.borderColor = 'green'; 
  }
});
// botao de validar
enviar.addEventListener('click', () => {
  const telefone = inserirTelefone.value.trim();
  let telefoneValido = telefone.length === 11;
  let nomeValido = inserirNome.value.trim().length >= 2;
  let emailValido = inserirEmail.value.trim().length >= 5 && inserirEmail.value.includes('@');
  let mensagemValida = inserirMensagem.value.trim().length >= 5;
  
  if (nomeValido && telefoneValido && emailValido && mensagemValida) {
    alert('Obrigado por se cadastrar!');
  } 
  
  else {
    alert("Verifique o formulário e preencha todos os campos corretamente!");
  }
});
