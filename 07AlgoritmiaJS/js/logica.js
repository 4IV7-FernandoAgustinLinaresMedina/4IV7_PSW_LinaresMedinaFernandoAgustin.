
//problema 3

function problema3(){
    //definir un alfabeto
    var alfabeto=['A','B','C','D','E','F',
    'G','H','I','J','K','L','M','N',
    'Ñ','O','P','Q','R','S','T','U',
    'V','W','X','Y','Z'];

    //obtener la cadena del input y separar por comas

    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //eliminar el espacio que hay entre cada palabra
    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //calcular los caracteres unicos de cada palabra

    var p3_res ='';

    //iterar en cada palabra

    p3_palabras.forEach(function (palabra, i){
        //separar las palabras en un array para leer cada letra
        var letras_unicas = [];
        var palabra_array = palabra.split('');
        //iterar el alfabeto
        alfabeto.forEach(function (letra, j){
            //iterar por palabra
            palabra_array.forEach(function (letra_palabra, k){
                //comprobar que la letra esta dentro del alfabeto
                if(letra_palabra == letra){
                    //si la letra no la hemos contado, la agregamos a un array
                    //para contar las letras unicas
                    if(letras_unicas.indexOf(letra)  < 0){
                        letras_unicas.push(letra);
                    }
                }
            });

        });
        p3_res += 'Palabra: ' +palabra + '=' + letras_unicas.length + '\n';
    });

    document.querySelector('#p3-output').textContent = p3_res;
}

function problema1(){
    var p1_input = document.getElementById("p1-input").value;
    var separar_palabras = p1_input.split(" ");
    var pr='';

    if(p1_input == ""){
        alert('El campo esta vacio')
    }
    if(p1_input != ""){
        p1_input.forEach(function(palabra, i){
            var palabras_array =[];
            palabras_array.push(separar_palabras);
        });

        pr = ('La lista invertida es = '+palabras_array.reverse()+ '\n');
    }
    document.querySelector('#problema-output').textContent = pr;
}