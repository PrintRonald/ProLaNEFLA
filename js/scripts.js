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

  function generarNuevoColor(){
    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";
  
    for(var i = 0; i < 6; i++){
      color = color + simbolos[Math.floor(Math.random() * 16)];
    }
  
    document.body.style.background = color;
    document.getElementById("hexadecimal").innerHTML = color;
  }

  

