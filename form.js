export default module.exports= checkNombre;
var valoresAceptadosNumeros = /^[0-9]+$/;
var valoresAceptadosLetras=/^[a-zA-Z]+$/;
function checkNombre(valor) {
    if(valor.match(valoresAceptadosLetras)){
        if (valor.value.length > 4 && valor.value.length < 30 ) {
            return true;
            }	 
        else {
            return false;
        }

    }else{
        alert('Digite solo caracteres alfabeticos')
        return false;
    }
    
         
}

function checkApellido(valor) {

}

function checkTelefono(valor) {

}

function checkCorreo(valor) {

}

function checkContrasena(valor) {

}



/*
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
error.style.color = "red";

var form = document.getElementById("form-registro");

    form.addEventListener("submit", function(evt){
        evt.preventDefault();
        //console.log("Enviando formulario...");
        //alert("Prueba");
        var mensajesError = [];



        if(nombre.value === null || nombre.value === ""){
            mensajesError.push("Ingresa tu nombre");
        }
        if(apellido.value === null || apellido.value === ""){
            mensajesError.push("Ingresa tu apellido");
        }
        error.innerHTML = mensajesError.join(', ');

});
*/


