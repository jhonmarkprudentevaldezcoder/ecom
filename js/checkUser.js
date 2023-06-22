firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.href = 'http://127.0.0.1:5500/BloomCosmetics.html';
  }
});
