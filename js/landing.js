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
