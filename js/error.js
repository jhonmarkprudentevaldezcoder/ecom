var errorMessageContainer = document.getElementById('error-message');

function displayErrorMessage(message) {
  errorMessageContainer.textContent = message;
  errorMessageContainer.style.display = 'block';
}

try {
  throw new Error('This is a sample error message');
} catch (error) {
  displayErrorMessage(error.message);
}
