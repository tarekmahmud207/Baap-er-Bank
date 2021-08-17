// login form js
document.getElementById('login-submit-button').addEventListener('click', function(){
    // user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
        
    }
})




