/* global formulario */

function validar(registro){
    if(registro.nombre.value.length < 1){
        alert("Escriba por lo menos 2 caracteres en el campo Nombre");
        registro.nombre.focus();
        return false;
    }

    var checkOK = "QWERTUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = registro.nombre.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente letras en el campo Nombre");
        registro.nombre.focus();
        return false;
    }
    
    
    if(registro.appat.value.length < 1){
        alert("Escriba por lo menos 2 caracteres en el campo");
        registro.appat.focus();
        return false;
    }

    var checkOK = "QWERTUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = registro.appat.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente letras en el campo Apellido Paterno ");
        registro.appat.focus();
        return false;
    }
    
    
    if(registro.apmat.value.length < 1){
        alert("Escriba por lo menos 2 caracteres en el campo");
        registro.apmat.focus();
        return false;
    }

    var checkOK = "QWERTUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = registro.apmat.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente letras en el campo Apellido Materno");
        registro.apmat.focus();
        return false;
    }
    
    
    
    
    if(registro.boleta.value.length < 1){
        alert("Escriba por lo menos 1 numero");
        registro.boleta.focus();
        return false;
    }

    var checkOK = "123456789";

    var checkStr = registro.boleta.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros positivos en el campo boleta");
        registro.boleta.focus();
        return false;
    }
    
   
}



function validar1(eliminar){
    if(eliminar.eliminarboleta.value.length < 1){
        alert("Escriba por lo menos 1 numero");
        eliminar.eliminarboleta.focus();
        return false;
    }

    var checkOK = "123456789";

    var checkStr = eliminar.eliminarboleta.value;

    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros positivos en el campo boleta");
        eliminar.eliminarboleta.focus();
        return false;
    }
}





