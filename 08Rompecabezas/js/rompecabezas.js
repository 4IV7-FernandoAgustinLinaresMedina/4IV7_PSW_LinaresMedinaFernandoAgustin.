//vamos a necesitar obtener todas las piezas

var piezas = document.getElementsByClassName('movil');

//resdimensionar las piezasa

var tamWidth = [134,192,134,163,134,163,134,192,134];
var tamHeight = [163,134,163,134,192,134,163,134,163];

for(var i =0;i<piezas.length;i++){

    //enviar el atributo de w h
    piezas[i].setAttribute("width" , tamWidth[i]);
    piezas[i].setAttribute("heigth", tamHeight[i]);
    piezas[i].setAttribute("x", Math.floor(Math.random()*10)+i);
    piezas[i].setAttribute("y", Math.floor(Math.random()*400)+i);
    //que se pueda mover
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)")

}

var elementoSeleccionado = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt){
    elementoSeleccionado = reordenar(evt);
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPosX = parseFloat(elementoSeleccionado.getAttribute("x"));
    currentPosY = parseFloat(elementoSeleccionado.getAttribute("y"));
//ahora si debe existir un movimiento
elementoSeleccionado.setAttribute("onmousemove", "moverElemento(evt)");

}

function moverElemento(evt){
    var dx = evt.clientX - currentPosX;
    var dy = evt.clientY - currentPosY;

    currentPosX = currentPosX + dx;
    currentPosY = currentPosY + dy;


    elementoSeleccionado.setAttribute("x", currentPosX);
    elementoSeleccionado.setAttribute("y" , currentPosY);

    currentPosX = evt.clientX;
    currentPosY = evt.clientY;

    elementoSeleccionado.setAttribute("onmouseoff", "desseleccionarElemento(evt)");
    elementoSeleccionado.setAttribute("onmouseup", "desseleccionarElemento(evt)");
    iman();
}

function desseleccionarElemento(evt){

    //validar que haga el match
    testing();
    //se debe bloquear la pieza
    if(elementoSeleccionado != 0){
        //hay que eliminar los atributos
        elementoSeleccionado.removeAttribute("onmousemove");
        elementoSeleccionado.removeAttribute("onmouseout");
        elementoSeleccionado.removeAttribute("onmouseup");
        elementoSeleccionado = 0;
    }
}

var entorno = document.getElementById('entorno');

function reordenar(evt){

    var padre = evt.target.parentNode;

    var clone = padre.cloneNode(true);

    var id = padre.getAttribute("id");

    entorno.remoteChild(document.getElementById[i]);
    
    entorno.appendChild(clone);

    return entorno.lastChild.firstChild;
}



var originX = [200,304,166,200,333,437,200,304,466];
var originY = [100,100,100,233,204,233,337,366,337];


function iman(){
    for(var i = 0; i < piezas.length; i++){
        if(Math.abs(currentPosX-originX[i])<15 &&
             Math.abs(currentPosY-originY[i])<15){
                 elementoSeleccionado.setAttribute("x", originX[i]);
                 elementoSeleccionado.setAttribute("y", originY[i]);
             }
    }

}

var win = document.getElementById("win");

function testing(){
    var bien_ubicada = 0;
    var padres = document.getElementsByClassName('padre');
    for(var i =0; i<piezas.length; i++){
        //primero las posiciones
        var posX = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posY = parseFloat(padres[i].firstChild.getAttribute("y"));
        ide = padres[i].getAttribute("id");

        if(originX[ide] == posX && originY[ide] == posY){
            bien_ubicada = bien_ubicada + 1;
        }
        if(bien_ubicada ==9){
            win.onplay();
        }
    }
}