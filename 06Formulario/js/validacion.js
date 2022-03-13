/*
Javascript es un lenguaje que posee un paradigma
orientado a objetos y a funciones, portal motivo
presenta una particularidad la cual es:

NO TIPADO

no existe int, float, string, ni char, 

Todo es VAR--variable

Deacuerdo al estandar ES6 se manjan 3 tipos 
de variables

VAR
LET  es una variable de tipo "protected"
CONST




*/

function validar(formulario){
    //obtener los datos y discriminar a los que tienen 3 letras
    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 caracteres en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    var chekOK ="QWERTYUIOPASDFGHJKLÑZXCVBNM"
    +"qwertyuiopasdfghjklñzxcvbnm";

    var chekStr = formulario.nombre.value;

    var todoesvalido= true;

    for(var i = 0; i<chekStr.lenght;i++){
        var ch= chekStr.charAt(i);
        for(var j = 0; j < chekOK.length; j++){
            if(ch == chekOK.charAt(j)){
                break;
            }
        if(j == chekOK.length){
            todoesvalido= false;
            break;    
        }
    }
    }
    if(!todoesvalido){
        alert("Escriba unicamente letras en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    var chekOK ="123456789";

    var chekStr = formulario.edad.value;
    var todoesvalido= true;

    for(var i = 0; i<chekStr.lenght;i++){
        var ch= chekStr.charAt(i);
        for(var j = 0; j < chekOK.length; j++){
            if(ch == chekOK.charAt(j)){
                break;
            }
        if(j == chekOK.length){
            todoesvalido= false;
            break;    
        }
    }
    }
    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo Edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.email.value;

    //creo mi expresion regular

    //var b =/^[^@\s]+[^@\.\s]+:

    alert("Email " + (b.test(txt)?" ":" no ")+" valido");

    return b.test;
}