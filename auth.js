const correctPin = "211330"; // Cambia esto al PIN deseado

function verifyPin() {
  const pinInput = document.getElementById('pin-input').value;
  if (pinInput === correctPin) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('content-container').style.display = 'block';
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
}