

//SELECTORS//

const loginContent = document.querySelector('.login-content');

const signupContent = document.querySelector('.signup-content');

const signinButton = document.getElementById('signin');


const signupButton = document.getElementById('signup');

const logIn = document.querySelector('.login-b');

const signUp= document.querySelector('.signup-b');

const loginContainer = document.querySelector('.login-container');

const onloadContainer = document.querySelector('.onload');






//FUNCTIONS

signupButton.addEventListener('click', function(){
    

    
    if (loginContent.classList.contains('login-content')) {
        loginContent.classList.remove('login-content')
        loginContent.classList.add('login-content-after')
        signupContent.classList.remove('signup-content')
        
        signupContent.classList.add('signup-content-after')
    }
    

 
    
})



signinButton.addEventListener('click', function(){
    
    if (signupContent.classList.contains('signup-content-after')) {
        
        signupContent.classList.remove('signup-content-after')
        signupContent.classList.add('signup-content')
        
        loginContent.classList.remove('login-content-after')
        
        loginContent.classList.add('login-content')
    }
    
})


logIn.addEventListener('click', function(){
    
    
    loginContainer.classList.replace('login-container', 'login-container-after')
    
})




/*ON LOAD*/

window.onload= function (){
    
   setTimeout(function() {
       
       
       onloadContainer.classList.replace('onload', 'onload-after')
    
       
       
   }, 3000);
   
}