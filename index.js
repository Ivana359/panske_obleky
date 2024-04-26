

document.addEventListener('DOMContentLoaded', function() {
    const kosile = document.getElementById("product-image");
    const tlačítka = document.querySelectorAll('.color-button');
  
    tlačítka.forEach(function(tlačítko) {
      tlačítko.addEventListener("click", function() {
        const color = this.getAttribute('data-color');  
        kosile.style.fill = color;  
      });
    });
  });