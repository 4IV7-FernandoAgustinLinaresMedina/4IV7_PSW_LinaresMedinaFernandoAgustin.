///var valor = document.getElementById('valor');
///var cuota = document.getElementById('cuota');
///var periodo = document.getElementById('periodo');///

function validar(){
    if(form.valor.value==0){
        alert("El valor esta vacio");
        form.valor.value="";
        form.valor.focus();
        return false;}

        if(form.cuota.value==0){
            alert("La cuota esta vacio");
            form.cuota.value="";
            form.cuota.focus();
            return false;}
}