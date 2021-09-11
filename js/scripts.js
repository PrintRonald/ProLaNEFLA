var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("HoraActual").innerHTML = t;
}

function myFunction() {
    var person = prompt("Porfavor ingresa aquí tu nombre", "Nombre");
    if (person != null) {
      document.getElementById("Bienvenida").innerHTML =
      "Hola " + person + " ¿Como estas hoy, te invitamos a revisar nuestra galería de trailers?, está interesante. !!!NO OLVIDES REGISTRARTE!!!";
    }
  }
  

