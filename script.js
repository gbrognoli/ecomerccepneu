// Seu código JavaScript aqui
// Adiciona um evento de clique ao botão "Comprar"
var buyButtons = document.querySelectorAll('.buy-button');
for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function() {
    alert('O produto foi adicionado ao carrinho!');
  });
}

// Adiciona um efeito de fade-in suave ao carregar a página
var products = document.querySelectorAll('.product');
for (var i = 0; i < products.length; i++) {
  products[i].style.opacity = 0;
  products[i].style.transition = 'opacity 0.5s';
}

window.addEventListener('load', function() {
  for (var i = 0; i < products.length; i++) {
    products[i].style.opacity = 1;
  }
});
