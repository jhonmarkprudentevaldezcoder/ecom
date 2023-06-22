// Logout button click event handler
document.getElementById('logout-button').addEventListener('click', function () {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful
      console.log('User logged out');
      // Redirect to a different page or perform other post-logout actions
    })
    .catch(function (error) {
      // An error happened during sign-out
      console.error('Logout error:', error);
    });
});
