firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is logged in
    displayUserInfo(user);
  } else {
    // User is not logged in
    console.log('User is not logged in');
  }
});

// Function to display user information
function displayUserInfo(user) {
  var displayNameContainer = document.getElementById('profile-name');
  var emailContainer = document.getElementById('profile-email');

  displayNameContainer.textContent =
    user.displayName.toUpperCase() + ' WELCOME';
  emailContainer.textContent = 'Email: ' + user.email;
  /*  photoURLContainer.innerHTML =
    "Profile Photo: <img src='" + user.photoURL + "' alt='Profile Photo'>"; */
}
