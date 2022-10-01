function validate(){
    var name = document.getElementById("petName").value
    var species = document.getElementById("petSpecies").value
    var gender = document.getElementById("petGender").value
    var dropDate = document.getElementById("dropDate").value
    var drop = new Date(dropDate)
    var dropTime = document.getElementById("dropTime").value
    var currDate = new Date();
    var flag = 0;


    if(name == ''){
        errName.innerHTML = "Name must be filled"
    }
    else if(!isNaN(name)){
        errName.innerHTML = "Name can not be mixed with number"
    }
    else{
        errName.innerHTML = ""
        flag = flag + 1
    }

    
    if(species == ''){
        errSpecies.innerHTML = "Choose Species"
    }
    else{
        errSpecies.innerHTML = ""
        flag = flag + 1
    }


    if(gender == ''){
        errGender.innerHTML = "Choose Gender"
    }
    else{
        errGender.innerHTML = ""
        flag = flag + 1
    }

    if(dropDate == ''){
        errDrop.innerHTML = "Fill In Date"
    }
    else if(drop < currDate){
        errDrop.innerHTML = "Out Of Date" 
    }
    else{
        errDrop.innerHTML = "" 
        flag = flag + 1
    }


    if(dropTime == ''){
        errTime.innerHTML = "Fill In Time"
    }
    else{
        errTime.innerHTML = "" 
        flag = flag + 1
    }


    if(flag != 5){
        event.preventDefault()
        flag = 0;
    }
}