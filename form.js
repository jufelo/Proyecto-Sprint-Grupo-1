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