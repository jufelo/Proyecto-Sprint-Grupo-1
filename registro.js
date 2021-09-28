
document.querySelector("#btn-submit-form").addEventListener('click', agregarRegistro)
function agregarRegistro()
{
    let name = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
    
    const arreglomax = [arreglo, cantVeces];
    const arreglo = [];
    arreglo.push(name,apellido,telefono,correo,contrasena);
    cantVeces=(arreglo.length)/5;

    console.log(arreglo)
        




}