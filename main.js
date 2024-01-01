document.addEventListener('DOMContentLoaded', function () {
    const h1Element = document.querySelector('.fade-in');
  
    h1Element.addEventListener('mouseenter', function () {
      h1Element.classList.add('fade-in');
    });
  
    h1Element.addEventListener('mouseleave', function () {
      h1Element.classList.remove('fade-in');
    });
  });