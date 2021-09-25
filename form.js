export default checkNombre;
export default checkApellido;
export default checkTelefono;
export default checkCorreo;
export default checkContrasena;
document.querySelector("#btn-submit-form").addEventListener('click',click_boton);

function click_boton()
{
    let name = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    checkNombre(nombre);
    checkApellido(apellido);
    checkTelefono(telefono, "telefono");

}
function checkNombre(valor) {
    let verificacion = validar_texto(valor);let array_campo = Array.from(valor);
    let verificacion = true;
    if (campo != "") {
        if (array_campo.length <= 30 && array_campo.length >= 4) {
            for(let i=0; i<array_campo.length; i++)
            {
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){  
                    verificacion = false;
                    alert("El campo no admite numeros");
                    i = array_campo.length;
                                    
                }
            }
        }
        else
        {
            verificacion = false;
            alert("El campo no admite numeros");
            
        }       
    }
    else
    {
        verificacion = false;   
        alert("El campo no admite numeros");
        
    }
    return verificacion;
    
    
         
}

function checkApellido(valor) {
    let array_campo = Array.from(valor);
    let verificacion = true;
    if (campo != "") {
        if (array_campo.length <= 30 && array_campo.length >= 4) {
            for(let i=0; i<array_campo.length; i++)
            {
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){  
                    verificacion = false;
                    i = array_campo.length;                  
                }
            }
        }
        else
        {
            verificacion = false;
        }       
    }
    else
    {
        verificacion = false;       
    }
    return verificacion;

}

function checkTelefono(valor) {
    let array_campo = Array.from(valor);
    let verificacion = true;
    if(campo != ""){
        if(array_campo.length == 7){
            for(let i=0; i<array_campo.length; i++)
            {                
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){ 
                                                        
                }
                else
                {
                    verificacion = false;
                    i = array_campo.length;  
                }
            }
        }
        else
        {
            verificacion = false;
        }

    }
    else
    {
        verificacion = false;
    }
    return verificacion;

}

function checkCorreo(valor) {

}

function checkContrasena(valor) {


}




