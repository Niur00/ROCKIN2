function iniciar() {
  var correo = document.getElementById('correo').value
  var contraseña = document.getElementById('contraseña').value

  if (correo == "") {
      alert('es necesario ingresar un correo!');
  } else if (contraseña == "") {
      alert('es necesario ingresar una contraseña!');
     
  } 
  event.preventDefault()
}

function registrar() {
  var correoRegistro = document.getElementById('re-correo').value
  var contrasenaRegistro = document.getElementById('re-contraseña').value
  var confirmRegistro = document.getElementById('re-confirm').value
  var nombreRegistro = document.getElementById('re-nombre').value
  var apellidoRegistro = document.getElementById('re-apellido').value
  var apellidoMRegistro = document.getElementById('re-apellidoM').value

  if (correoRegistro == "") {
      alert('Es necesario ingresar un correo de registro!');
  } else if (contrasenaRegistro == "") {
      alert('Es necesario ingresar una contraseña de registro!');
     
  } else if (contrasenaRegistro.length < 8){
      alert('Es necesario que la contraseña sea mayor a 8 caracteres')

  } else if (!(confirmRegistro == contrasenaRegistro)) {
      alert('Es necesario que las contraseñas sean iguales!');
     
  } else if (nombreRegistro == "") {
      alert('Es necesario ingresar tu nombre!');
     
  } else if (apellidoRegistro == "") {
      alert('Es necesario ingresar el apellido paterno!');
     
  } else if (apellidoMRegistro == "") {
      alert('Es necesario ingresar el apellido materno!');
     
  } 
  event.preventDefault()
}
