class usuario{
  constructor(nombre, apellido, telefono, correo, contrasena){
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.correo = correo;
      this.contrasena = contrasena;
  }

}

var registros=[];

function agregarRegistro(){
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  telefono = document.getElementById("telefono").value;
  correo = document.getElementById("correo").value;
  contrasena = document.getElementById("contrasena").value;

  let registro= new usuario(nombre, apellido, telefono, correo, contrasena);

  registros.push(registro);
  console.log(registro);

  return registros;

}

function ordenarArreglo(arreglo){

  arreglo.sort((a,b) => {
      if(a.apellido.toLowerCase() == b.apellido.toLowerCase()) {return 0;}
      else if (a.apellido.toLowerCase() > b.apellido.toLowerCase()) {return 1;}
      else {return -1;}
  });
  console.table(arreglo);
  return arreglo;
}

function filtrarCorreo(arreglo){

  filtrado = arreglo.filter(function (email) {
      return email.correo.endsWith('gmail.com');
  });
  console.table(filtrado);

  return filtrado;
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.filtrarCorreo = filtrarCorreo;
