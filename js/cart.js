var database = firebase.database();
var user = firebase.auth().currentUser;
var userId = "";

  firebase.auth().onAuthStateChanged(function (user) {
   
    if (user) {
         userId = user.uid;
        console.log('User ID:', userId);
   
productsRef = database.ref('cart/' + userId);

var itemCountElement = document.getElementById('itemCount');
var totalElement = document.getElementById('Total');
var SubtotaltotalElement = document.getElementById('Subtotal');

  productsRef.on('value', function(snapshot) {
  var products = snapshot.val();
  productsRef.once('value')
  .then(function(snapshot) {
    var itemCount = snapshot.numChildren();
    itemCountElement.textContent = 'You have ' + itemCount +' items in your cart';
  })
  .catch(function(error) {
    console.error('Failed to retrieve data:', error);
  });


  // Update HTML content with the retrieved data
  var productsList = document.getElementById('cart-list');
  productsList.innerHTML = '';

  for (var key in products) {
    if (products.hasOwnProperty(key)) {
      var product = products[key];
      var listItem = document.createElement('div');
      listItem.classList.add('card', 'mb-3');

      var cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      var dFlex = document.createElement('div');
      dFlex.classList.add('d-flex', 'justify-content-between');

      var itemDetails = document.createElement('div');
      itemDetails.classList.add('d-flex', 'flex-row', 'align-items-center');

      var imageDiv = document.createElement('div');
      var productImage = document.createElement('img');
      productImage.src = product.imageUrl;
      productImage.classList.add('img-fluid', 'rounded-3');
      productImage.alt = 'Shopping item';
      productImage.style.width = '65px';
      imageDiv.appendChild(productImage);

      var msDiv = document.createElement('div');
      msDiv.classList.add('ms-3');

      var productName = document.createElement('h5');
      productName.textContent = product.name;

      var productDescription = document.createElement('p');
      productDescription.classList.add('small', 'mb-0');
      productDescription.textContent = product.description;

      msDiv.appendChild(productName);
      msDiv.appendChild(productDescription);
      itemDetails.appendChild(imageDiv);
      itemDetails.appendChild(msDiv);

      var quantityPriceDiv = document.createElement('div');
      quantityPriceDiv.classList.add('d-flex', 'flex-row', 'align-items-center');

      var quantityDiv = document.createElement('div');
      quantityDiv.style.width = '50px';

      var quantityLabel = document.createElement('h5');
      quantityLabel.classList.add('fw-normal', 'mb-0');
      quantityLabel.textContent = product.quantity; // Replace with the actual quantity

      quantityDiv.appendChild(quantityLabel);

      var priceDiv = document.createElement('div');
      priceDiv.style.width = '80px';

      var priceLabel = document.createElement('h5');
      priceLabel.classList.add('mb-0');
      priceLabel.textContent = product.price; // Replace with the actual price

      priceDiv.appendChild(priceLabel);

      var deleteLink = document.createElement('a');
      deleteLink.href = '#!';
      deleteLink.style.color = '#cecece';

      var deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fas', 'fa-trash-alt');

      deleteLink.appendChild(deleteIcon);
      deleteLink.addEventListener('click', function() {
        deleteFromCart(userId, key); // Replace userEmail with the actual user email
      });

      quantityPriceDiv.appendChild(quantityDiv);
      quantityPriceDiv.appendChild(priceDiv);
      quantityPriceDiv.appendChild(deleteLink);

      dFlex.appendChild(itemDetails);
      dFlex.appendChild(quantityPriceDiv);

      cardBody.appendChild(dFlex);
      listItem.appendChild(cardBody);

      productsList.appendChild(listItem);


      var total = (product.price * product.quantity) + 50;
      totalElement.textContent = total;
      SubtotaltotalElement.textContent = product.price * product.quantity;
    
      
      function deleteFromCart(userId, itemId) {
        var cartRef = database.ref('cart/' + userId);
        
        cartRef.child(itemId).remove()
          .then(function() {
            console.log('Item deleted from cart:', itemId);
          })
          .catch(function(error) {
            console.error('Failed to delete item from cart:', error);
          });
      }
    }

  }

 

  
})
} else {
    console.log('No user is signed in');
}

});;
