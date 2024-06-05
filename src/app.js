let userName=document.getElementById("userName");
let usernameMessage=document.getElementById("usernameMessage");
let email=document.getElementById("Email");
let emailMessage=document.getElementById("emailMessage");
let phoneNo=document.getElementById("phoneNo");
let phonenoMessage=document.getElementById("phonenoMessage");
let passWord=document.getElementById("passWord");
let passwordMessage=document.getElementById("passwordMessage");
let confirmPassword=document.getElementById("confirmPassword");
let conpasswordMessage=document.getElementById("conpasswordMessage");


function validateUserName()
{
    let nameRegex = /^[a-zA-Z ]+$/;
    let name=userName.value.trim();
    if(name==="")
        {
            usernameMessage.innerText="username can not be blank." 
            userName.classList.remove("border-green-500");
            userName.classList.remove("border-gray-300");
            userName.classList.add("border-red-500");
            
        }
        else if(!nameRegex.test(name))
        {
            usernameMessage.innerText="Username must be alphabetic characters or spaces." 
            userName.classList.remove("border-green-500");
            userName.classList.remove("border-gray-300");
            userName.classList.add("border-red-500");
        }
        else if(name.length<=2)
        {
            usernameMessage.innerText="username min 3 char." 
            userName.classList.remove("border-green-500");
            userName.classList.remove("border-gray-300");
            userName.classList.add("border-red-500");
        }
        else if(name.length>30)
        {
            usernameMessage.innerText="username max 30 char." 
            userName.classList.remove("border-green-500");
            userName.classList.remove("border-gray-300");
            userName.classList.add("border-red-500");
        }
        else{
            usernameMessage.innerText="" 
            userName.classList.remove("border-red-500");
            userName.classList.add("border-green-500");
        }
}
function validateEmail()
{
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailId=email.value.trim();
    if(emailId==="")
        {
            emailMessage.innerText="email can not be blank." 
            email.classList.remove("border-green-500");
            email.classList.remove("border-gray-300");
            email.classList.add("border-red-500");
        }
        else if(!emailRegex.test(emailId))
        {
            emailMessage.innerText="please enter valid email." 
            email.classList.remove("border-green-500");
            email.classList.remove("border-gray-300");
            email.classList.add("border-red-500");
        }
        else{
            emailMessage.innerText="" 
            email.classList.remove("border-red-500");
            email.classList.add("border-green-500"); 
        }

}
function validatePhoneno()
{
    var phoneRegx = /^\d{10}$/;
    let phone=phoneNo.value.trim();
    if(phone==="")
    {
        phonenoMessage.innerText="phoneno can not be blank." 
        phoneNo.classList.remove("border-green-500");
        phoneNo.classList.remove("border-gray-300");
        phoneNo.classList.add("border-red-500");
    }
    else if(!phoneRegx.test(phone))
    {
        phonenoMessage.innerText="phoneno should be numeric and 10 digit only." 
        phoneNo.classList.remove("border-green-500");
        phoneNo.classList.remove("border-gray-300");
        phoneNo.classList.add("border-red-500"); 
    }
    else{
        phonenoMessage.innerText="";
        phoneNo.classList.remove("border-red-500");
        phoneNo.classList.add("border-green-500"); 
    }
}
function validatePassword()
{
    let passRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
    let password=passWord.value.trim();
    if(password==="")
    {
    passwordMessage.innerText="password can not be blank." 
    passWord.classList.remove("border-green-500");
    passWord.classList.remove("border-gray-300");
    passWord.classList.add("border-red-500");
    }
    else if(password.length<=8)
    {
    passwordMessage.innerText="password at least 8 char." 
    passWord.classList.remove("border-green-500");
    passWord.classList.remove("border-gray-300");
    passWord.classList.add("border-red-500"); 
    }
    else if(!passRegx.test(password))
    {
        passwordMessage.innerText="password should contain one uppercase,lowercase,digit and special character." 
        passWord.classList.remove("border-green-500");
        passWord.classList.remove("border-gray-300");
        passWord.classList.add("border-red-500"); 
    }
    else{
        passwordMessage.innerText="";
        passWord.classList.remove("border-red-500");
        passWord.classList.add("border-green-500");  
    }
}
function  validateconPassword()
{
    let confirmpassword=confirmPassword.value.trim();

    if(confirmpassword==="")
    {
        conpasswordMessage.innerText="Confirm Password can not be blank." 
        confirmPassword.classList.remove("border-green-500");
        confirmPassword.classList.remove("border-gray-300");
        confirmPassword.classList.add("border-red-500");
    }
    else if(passWord.value.trim===""){
       validatePassword();
    }
    else if(confirmpassword!==passWord.value.trim())
    {
        conpasswordMessage.innerText="Confirm Password not match with password" 
        confirmPassword.classList.remove("border-green-500");
        confirmPassword.classList.remove("border-gray-300");
        confirmPassword.classList.add("border-red-500");
    }
    else{
        conpasswordMessage.innerText="";
        confirmPassword.classList.remove("border-red-500");
        confirmPassword.classList.add("border-green-500");  
    }
}
function validateInput()
{
       validateUserName(); 
       validateEmail();
       validatePhoneno();
       validatePassword();
       validateconPassword();
}