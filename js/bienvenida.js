function myFunction() {
    var person = prompt("Porfavor ingresa aquí tu nombre", "Nombre");
    if (person != null) {
      document.getElementById("Bienvenida").innerHTML =
      "Hola " + person + " ¿Como estas hoy, te invitamos a revisar nuestra galería de trailers?, está interesante. !!!NO OLVIDES REGISTRARTE!!!";
    }
  }