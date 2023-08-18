document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    if (email == 'tahmid@gmail.com' && password == 'tahmid') {
        window.location.href = 'wallet.html';
    }
    else {
        alert('Invalid user')
    }
});