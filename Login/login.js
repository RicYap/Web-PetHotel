function validate()
{
    var email = document.getElementById("email").value
    var pass = document.getElementById("password").value
    var errorEmail = document.getElementById("errorEmail")

    if(email == ''){
        errorEmail.innerHTML = "Email must be filled"
    }
    else if(email.indexOf("@") == -1){
        errorEmail.innerHTML = "Email must containt @"
    }
    else if(email.split("@").length > 2){
        errorEmail.innerHTML = "Email must be containt only 1 @"
    }
    else if(!email.endsWith(".com")){
        errorEmail.innerHTML = "Email must be ends with .com"
    }
    else if(email.indexOf("@") == 0){
        errorEmail.innerHTML = "Email can not be start with @"
    }
    else{
        errorEmail.innerHTML = ""
        flag = flag + 1
    }

    event.preventDefault()
}