firebase.auth().onAuthStateChanged(function (user) {
  const logoutDiv = document.getElementById('logout-button');
  const loginDiv = document.getElementById('login-button');
  const verificationStatus = document.getElementById('verification-status');
  if (user) {
    loginDiv.style.display = 'none';
    logoutDiv.style.display = 'flex';
    verificationStatus.display = 'flex';
  } else {
    loginDiv.style.display = 'flex';
    logoutDiv.style.display = 'none';
  }
  if (loginDiv.style.display == 'flex') {
    verificationStatus.display = 'none';
  }
});


  /* // Add click event listener to the button
  addToCartButton.addEventListener('click', function() {
    // Get the product details
    var productName = product.name;
    var productPrice = product.price;
    var productDescription = product.description;
    var productImage = product.imageUrl;
    var productId = product.productId;
    // Create a cart item object
    var cartItem = {
      name: productName,
      price: productPrice,
      description: productDescription,
      imageUrl: productImage,
      id: productId,
      quantity: 1

    };
    // Add the cart item to the cart
    addToCart(productId,cartItem);
  }); */