// Check if user's email is verified
firebase.auth().onAuthStateChanged(function (user) {
  if (user.emailVerified) {
    // User's email is verified
    displayVerificationStatus('Email is verified');
  } else {
    // User's email is not verified
    displayVerificationStatus('Email is not verified');
  }
});

// Function to display verification status
function displayVerificationStatus(status) {
  var verificationStatusContainer = document.getElementById(
    'verification-status'
  );

  verificationStatusContainer.textContent = status;
}

function displayVerificationStatusFormat(statusFormat) {
  var verificationStatusContainerFormat = document.getElementById(
    'verification-message'
  );
  verificationStatusContainerFormat.textContent = statusFormat;
}
