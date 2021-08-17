  document.getElementById('login-submit').addEventListener('click', function() {
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;

//  get  user  password 
 const passwordField = document.getElementById('user-password');
 const userPassword =  passwordField.value;

 if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
    window.location.href = 'banking.html';
 }

    
})

