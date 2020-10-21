function valForm(){
    var pass, user, expresion, expresion2; 
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;
    expresion = /@+\w/;
    expresion2 = /\w$/@; //Ancla. Delimina el final del patrón. Significa acaba en.
   

    if(user === "" || pass === ""){
        alert("Complete los campos correspondientes");
        return false
    }else if(!expresion.test(user) || !expresion2.test(user)){
        alert("El usuario debe contener un @");
        return false
    }

}