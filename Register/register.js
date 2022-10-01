function validate(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var password = document.getElementById("password").value
    var confirm_password = document.getElementById("confirm").value
    var address = document.getElementById("address").value
    var flag = 0;

    if(name == ''){
        errorName.innerHTML = "Name must be filled"
    }
    else if(!isNaN(name)){
        errorName.innerHTML = "Name can not be mixed with number"
    }
    else{
        errorName.innerHTML = ""
        flag = flag + 1
    }

    
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


    if(phoneNumber == ''){
        errorPhoneNumber.innerHTML = "Phone Number must be filled"
    }
    else if(isNaN(phoneNumber)){
        errorPhoneNumber.innerHTML = "Must be filled with number"
    }
    else{
        errorPhoneNumber.innerHTML = ""
        flag = flag + 1
    }


    if(password == ''){
        errorPass.innerHTML = "Password must be filled"
    }
    else if(password.length < 8 || password.length > 15){
        errorPass.innerHTML = "Password must be 8-15 characters"
    }
    else{
        errorPass.innerHTML = ""
        flag = flag + 1
    }


    if(confirm_password == ''){
        errorConfirm.innerHTML = "Confirm Password must be filled"
    }
    else if(confirm_password != password){
        errorConfirm.innerHTML = "Confirm password must be same with password"
    }
    else{
        errorConfirm.innerHTML = ""
        flag = flag + 1
    }


    if(address == ''){
        errorAddress.innerHTML = "Address must be filled"
    }
    else{
        errorAddress.innerHTML = ""
        flag = flag + 1
    }

    if(flag == 6){
        alert("Register Successful")
    }
    else{
        event.preventDefault()
        flag = 0;
    }

}