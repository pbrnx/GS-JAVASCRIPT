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


const p1Element = document.getElementById('agrisense');
const p2Element = document.getElementById('tecnologias');
const p3Element = document.getElementById('beneficios');
const p4Element = document.getElementById('casos');
const p5Element = document.getElementById('educa');
const p6Element = document.getElementById('parcerias');
const p7Element = document.getElementById('cadastro');



//item 1
    p1Element.addEventListener("mouseover", ()=>{
        p1Element.style.transition = 'font-size 0.1s ease';
        p1Element.style.fontSize = "30px"
    });

    p1Element.addEventListener("mouseleave", ()=>{
      p1Element.style.fontSize = "25px";
    });


//item 2

p2Element.addEventListener("mouseover", ()=>{
    p2Element.style.transition = 'font-size 0.1s ease'
    p2Element.style.fontSize = "30px";
    });

p2Element.addEventListener("mouseleave", ()=>{
    p2Element.style.fontSize = "25px";
    
});

//item 3

p3Element.addEventListener("mouseover", ()=>{
  p3Element.style.transition = 'font-size 0.1s ease'
  p3Element.style.fontSize = "30px";
  });

p3Element.addEventListener("mouseleave", ()=>{
  p3Element.style.fontSize = "25px";
});

//item 4

p4Element.addEventListener("mouseover", ()=>{
  p4Element.style.transition = 'font-size 0.1s ease'
  p4Element.style.fontSize = "30px";
});

p4Element.addEventListener("mouseleave", ()=>{
  p4Element.style.fontSize = "25px";
  
});

//item 5

p5Element.addEventListener("mouseover", ()=>{
  p5Element.style.transition = 'font-size 0.1s ease'
  p5Element.style.fontSize = "30px";
  });

p5Element.addEventListener("mouseleave", ()=>{
  p5Element.style.fontSize = "25px";
  
});

//item 6

p6Element.addEventListener("mouseover", ()=>{
  p6Element.style.transition = 'font-size 0.1s ease'
  p6Element.style.fontSize = "30px";
  });

p6Element.addEventListener("mouseleave", ()=>{
  p6Element.style.fontSize = "25px";
  
});

p7Element.addEventListener("mouseover", ()=>{
  p7Element.style.transition = 'font-size 0.1s ease'
  p7Element.style.fontSize = "30px";
  });

p7Element.addEventListener("mouseleave", ()=>{
  p7Element.style.fontSize = "25px";
  
});


