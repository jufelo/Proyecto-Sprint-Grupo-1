
function checkNombre() {
    valor = document.getElementById("nombre").value;
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
            alert("El campo no admite numeros");
            return false;
            
            
        }
        return true;       
    }
    else
    {
          
        alert("El campo no admite numeros");
        return false;
        
    }
    
}

module.exports = checkNombre;


function checkApellido() {
    valor = document.getElementById("apellido").value;
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
            alert("El campo no admite numeros");
            return false;
            
            
        }
        return true;       
    }
    else
    {
          
        alert("El campo no admite numeros");
        return false;
        
    }
}
module.exports = checkApellido;


function checkTelefono() {
    valor = document.getElementById("telefono").value;
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
            return false;
        }

    }
    else
    {
        return false;
    }
    
}
module.exports = checkTelefono;

function checkCorreo() {
    valor = document.getElementById("correo").value;
    if (valor != null) {
        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( expr.test(valor) ){
            return true;
        }else{
            return false;
        }
              
        
    
    }else{
        return false;

    }
}
module.exports = checkCorreo;

function checkContrasena() {
valor = document.getElementById("contrasena").value;
    const r = /[A-Z]/;
    const m = /[a-z]/;
    const n = /[0-9]/;
    if(valor =! null) {
        
    if(array_campo.length >=8){
        for(let i=0; i<array_campo.length; i++)
            {                
                if(r.test(valor)){ 
                    if(m.test(valor)){
                        if(n.test(valor)){
                            return true;
                        }
                    }
                     return false;                                   
                }
                else
                {
                    return false;
                    i = array_campo.length;  
                }
            }

    }else{
        return false;
    }
}
}
module.exports = {checkNombre, checkApellido, checkTelefono, checkCorreo, checkContrasena};