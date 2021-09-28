document.querySelector("#btn-submit-form").addEventListener('click', click_boton)
function click_boton()
{
    let name = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
    
    checkNombre(nombre);
    checkApellido(apellido);
    checkTelefono(telefono);
    checkCorreo(correo);
    checkTelefono(contrasena);

}

function checkNombre(valor) {
    
    let array_campo = Array.from(valor);
    if (valor != "") {
        if (array_campo.length <= 30 && array_campo.length >= 4) {
            for(let i=0; i<array_campo.length; i++)
            {
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){  
                    alert("El campo no admite numeros");
                    i = array_campo.length;
                    return false;
                    
                                    
                }
            }
        }
        else
        {
            alert("El campono NO cumple con la longitud permitida");
            return false;    
            
        }
        
        return true;       
    }
    else
    {
          
        alert("El campo debe estar lleno");
        return false;
        
    }
    
}


module.exports = checkNombre;


function checkApellido(valor) {
    
    let array_campo = Array.from(valor);
    if (valor != "") {
        if (array_campo.length <= 30 && array_campo.length >= 4) {
            for(let i=0; i<array_campo.length; i++)
            {
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){  
                    alert("El campo no admite numeros");
                    i = array_campo.length;
                    return false;
                    
                                    
                }
            }
        }
        else
        {
            alert("El campono NO cumple con la longitud permitida");
            return false;
            
            
        }
        
        return true;       
    }
    else
    {
          
        alert("El campo debe estar lleno");
        return false;
        
    }
}
module.exports = checkApellido;


function checkTelefono(valor) {
    
    let array_campo = Array.from(valor);
    if(valor != ""){
        if(array_campo.length == 7){
            for(let i=0; i<array_campo.length; i++)
            {                
                if(array_campo[i] == "0" || array_campo[i] == "1" || array_campo[i] == "2" || array_campo[i] == "3" || array_campo[i] == "4" || array_campo[i] == "5" || array_campo[i] == "6" || array_campo[i] == "7" || array_campo[i] == "8" || array_campo[i] == "9"){ 
                    
                    return true;                                   
                }
                else
                {
                    return false;
                    i = array_campo.length;  
                }
            }
        }
        else
        {
            alert("El campono NO cumple con la longitud permitida");
            return false;
        }

    }
    else
    {
        alert("El campo debe estar lleno");
        return false;
    }
    
}
module.exports = checkTelefono;

function checkCorreo(valor) {
    
    if (valor != null) {
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( expr.test(valor) ){
            
            return true;
        }else{
            alert("Digite un correo valido");
            return false;
        }
              
        
    
    }else{
        alert("El campo debe estar lleno");
        return false;

    }
}
module.exports = checkCorreo;

function checkContrasena(valor) {
    let array_campo = Array.from(valor);
    
    if(valor =! null) {
        return true
    
    }
}

module.exports = {checkNombre, checkApellido, checkTelefono, checkCorreo, checkContrasena};