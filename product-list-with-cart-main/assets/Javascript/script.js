document.getElementById('add_cart_btn').addEventListener('click', function() {
    const shopIcon = document.getElementById('shop_icon');
    const beforeAddToCart = document.getElementById('before_add_to_cart');
    const afterAddToCart = document.getElementById('after_add_to_cart');
    const buttonText = document.getElementById('button_text');
  
    // Trocar a visibilidade dos SVGs
    if (shopIcon.style.display !== 'none') {
      shopIcon.style.display = 'none';
      beforeAddToCart.style.display = 'inline';
      buttonText.style.display = 'none';  // Esconde o texto "Add to Cart"
    } else if (beforeAddToCart.style.display !== 'none') {
      beforeAddToCart.style.display = 'none';
      afterAddToCart.style.display = 'inline';
    }
  
    // Mudar a cor do botão
    this.classList.toggle('active');
  });
  