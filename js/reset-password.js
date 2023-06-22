// Password reset form submit event handler
document
  .getElementById('password-reset-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email').value;

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        // Password reset email sent successfully
        displayResultMessage('Password reset email sent. Check your inbox.');
        console.log('successfully');
      })
      .catch(function (error) {
        // An error happened during password reset
        displayResultMessage('Error: ' + error.message);
      });
  });

// Function to display result message
function displayResultMessage(message) {
  var resultMessageContainer = document.getElementById('result-message');
  resultMessageContainer.textContent = message;
  resultMessageContainer.style.display = 'block';
}
