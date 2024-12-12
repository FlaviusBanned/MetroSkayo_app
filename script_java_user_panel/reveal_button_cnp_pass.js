document.getElementById('reveal-cnp-button').addEventListener('click', function() {
    var cnpField = document.getElementById('cnp');
    if (cnpField.type === 'password') {
        cnpField.type = 'text';
    } else {
        cnpField.type = 'password';
    }
});
document.getElementById('reveal-password-button').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});