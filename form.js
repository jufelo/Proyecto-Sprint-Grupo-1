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


