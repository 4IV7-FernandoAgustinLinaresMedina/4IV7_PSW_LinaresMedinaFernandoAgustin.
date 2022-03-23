function p1(){
    var campo = document.getElementById("capital").value;
    if(campo ==""){
    alert('El campo esta vacio');
    return false;
    }
    if(campo.length!=""){
        var ganancia = 0;
        var Sfinal = 0;
        var res='';

        ganancia = parseFloat(campo*2/100)
        Sfinal = parseFloat(campo*2/100)+parseFloat(campo)

        res=('La ganacia de tu inversion es = ' + ganancia + ' Y su saldo de este mes es = ' + Sfinal + '\n');

        
    }
    document.querySelector('#p1').textContent = res;
}

function p2(){
    var c = document.getElementById("sueldo").value;
    var c1 = document.getElementById("v1").value;
    var c2 = document.getElementById("v2").value;
    var c3 = document.getElementById("v3").value;
    if((c=="") || (c1=="") || (c2=="") || (c3=="")){
        alert('El campo esta vacio')
    }
    if((c!="") || (c1!="") || (c2!="") || (c3!="")){
        var comision = 0;
        var Tsueldo = 0;
        var r2 = '';
        var Tv=0
        
        Tv = parseFloat(c1)+parseFloat(c2)+parseFloat(c3)
        comision = parseFloat(Tv*10/100)
        Tsueldo = parseFloat(c)+parseFloat(comision)
        r2=('Su comision es de: '+comision+' y su sueldo total es de : '+Tsueldo+'\n');

    }
    document.querySelector('#p2').textContent = r2;

}

function p3(){
    var Tcompra = document.getElementById("compra").value;
    if(Tcompra ==""){
        alert('El campo esta vacio')
    }
    if(Tcompra !=""){
        var descuento = 0;
        var Dcompra = 0;
        var r3='';

        descuento = parseFloat(Tcompra*15/100)
        Dcompra = parseFloat(Tcompra)-parseFloat(descuento)
        r3=('El descuento de su compra es = '+descuento+' El monto total a pagar es de = '+Dcompra+'\n');
    }
    document.querySelector('#p3').textContent = r3;

}

function p4(){
    var p1 = document.getElementById("1er").value;
    var p2 = document.getElementById("2do").value;
    var p3 = document.getElementById("3er").value;
    var ex = document.getElementById("examen").value;
    var Tf = document.getElementById("Tfinal").value;
    if((p1=="") || (p2=="") || (p3=="") || (ex=="") || (Tf=="")){
        alert('El campo esta vacio')
    }
    if((p1>10) || (p2>10) || (p3>10) || (ex>10) || (Tf>10)){
        alert('Las calificaciones deben ser menores o iguales a 10')
    }
    if((p1<0) || (p2<0) || (p3<0) || (ex<0) || (Tf<0)){
        alert('No se admiten numeros negativos')
    }
    if((p1!="") || (p2!="") || (p3!="") || (ex!="") || (Tf!="")){
    var Pp = 0;
    var Pex = 0;
    var Ptf = 0;
    var Cf = 0;
    var r4 = '';

    Pp = ((parseFloat(p1)+parseFloat(p2)+parseFloat(p3))/3)*.55
    Pex = parseFloat(ex)*.30
    Ptf = parseFloat(Tf)*.15
    Cf = parseFloat(Pp)+parseFloat(Pex)+parseFloat(Ptf)
    r4 = ('Tu calificacio final es = '+Cf+'\n');
    }
    document.querySelector('#p4').textContent = r4;
}

function p5(){
    var Nh = document.getElementById("Nhombres").value;
    var Nm = document.getElementById("Nmujeres").value;

    if((Nh=="") || (Nm=="")){
        alert('El campo esta vacio')
    }
    if((Nh!="") || (Nm!="")){
        var total = 0;
        var Ph = 0;
        var Pm = 0;
        var r5 ='';

        total = parseFloat(Nh) + parseFloat(Nm)
        Ph = (parseFloat(Nh)*100)/parseFloat(total)
        Pm = (parseFloat(Nm)*100)/parseFloat(total)
        r5 = ('El porcentaje de Mujeres es = '+Pm+ '% Y el porcentaje de hombres es de = '+Ph+'% \n')
    }
    document.querySelector('#p5').textContent = r5;
}

function p6(){
var dia = document.getElementById("Dia").value;
var mes = document.getElementById("Mes").value;
var año = document.getElementById("Año").value;
var r6='';

if((dia == "") || (mes == 0) || (año == "")){
    alert('El campo esta vacio')
}
if((dia != "") || (mes != 0) || (año != "")){
    if((dia.length>2) || (año.length!=4)){
        alert('Los datos ingresados exceden el limite o no cumplen con el formato correcto')
        var hoy = new Date();

    años= hoy.getFullYear()-año;
    if (mes > hoy.getMonth()+1  || dia > hoy.getDay())
        años--;

    r6=('Tu edad es = '+años);
    }
    
}
document.querySelector('#p6').textContent = r6;

}