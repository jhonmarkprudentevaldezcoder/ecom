// Form submit event handler

if (typeof firebase.auth === 'undefined') {
  console.error('Firebase Authentication is not properly initialized.');
}
var errorMessageContainer = document.getElementById('error-message');
function displayErrorMessage(message) {
  errorMessageContainer.textContent = message;
  errorMessageContainer.style.display = 'block';
}
// Form submit event handler
document
  .getElementById('login-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get user input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Sign in user with Firebase Authentication
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        var user = userCredential.user;
        // Do something after successful login, e.g., redirect to a different page
        console.log('Login successful');
        window.location.href = 'BloomCosmetics.html';
      })
      .catch(function (error) {
        displayErrorMessage(error.errorMessage);
      });
  });
