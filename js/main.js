var database = firebase.database();
var productsRef = database.ref('products');
var productName ='';
var productPrice = '';
var productDescription = '';
var productImage = '';
var productId = '';
var productQuatity = '';

productsRef.on('value', function (snapshot) {
  var products = snapshot.val();

  // Update HTML content with the retrieved data
  var productsList = document.getElementById('products-list');
  productsList.innerHTML = '';

  for (var key in products) {
    if (products.hasOwnProperty(key)) {
      var product = products[key];
      var listItem = document.createElement('col-4');
      
      // Create HTML structure for the product details
      var productImage = document.createElement('img');
      productImage.src = product.imageUrl; 
      productImage.alt = product.name; 
      productImage.width = 200;
      productImage.height = 150;     
      listItem.appendChild(productImage);

      var productName = document.createElement('h3');
      productName.textContent = product.name;
      listItem.appendChild(productName);

      var productDescription = document.createElement('p');
      productDescription.textContent = 'Description: ' + product.description;
      listItem.appendChild(productDescription);

      productsList.appendChild(listItem);

      var productPrice = document.createElement('p');
      productPrice.textContent = 'PHP : ' + product.price;
      listItem.appendChild(productPrice);

       // Add "Add to Cart" button
      var addToCartButton = document.createElement('button');
      addToCartButton.textContent ='ADD TO CART';
      addToCartButton.style.backgroundColor = '#4CAF50';
      addToCartButton.style.color = 'white';
      addToCartButton.style.padding = '8px 16px';
      addToCartButton.style.border = 'none';
      addToCartButton.style.borderRadius = '4px';
      addToCartButton.style.cursor = 'pointer';
      addToCartButton.style.fontSize = '16px';
      addToCartButton.style.margin = '16px';
      addToCartButton.classList.add('button-add-to-cart');
      listItem.appendChild(addToCartButton);
      productsList.appendChild(listItem);
       // Add click event listener to the button
       
  
}}

addToCartButton.addEventListener('click', function() {
  // Get the product details
   productName = product.name;
   productPrice = product.price;
   productDescription = product.description;
   productImage = product.imageUrl;
   productId = product.productId;
   
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
});

function addToCart(productId,item) {
  // Get the currently logged-in user
 var user = firebase.auth().currentUser;
 // Reference to the "cart" table in the Firebase Realtime Database
 if (user) {
   var userId = user.uid; // Get the user's UID
   // Reference to the "cart" table in the Firebase Realtime Database
   var cartRef = database.ref('cart');

   cartRef.child(userId).child(productId).once('value', function(snapshot) { 
     var existingCartItem = snapshot.val();

     if (existingCartItem) {
    
      cartRef.child(userId).child(productId).child('quantity').transaction(function(currentQuantity) {
        // Increment the current quantity by 1
        return (currentQuantity || 0) + 1;
      }, function(error, committed, snapshot) {
        if (error) {
          console.error('Failed to increment quantity:', error);
        } else if (!committed) {
          console.log('Transaction aborted: Quantity was not incremented.');
        } else {
          console.log('Quantity incremented successfully.');
        }
      });
      console.log(existingCartItem);
       // Increment the quantity of the existing cart item
  
     }else{
       // Push the cart item to the database using the user UID as the key
       cartRef.child(userId).child(productId).set(item)
       .then(function() {
         console.log('Item added to cart:', item);
       })
       .catch(function(error) {
         console.error('Failed to add item to cart:', error);
       });
     }
    });
}}

});
