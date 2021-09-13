$(document).ready(function(){
  $("button").click(function(){
    $("#off").hide();
  });

  $("#flip").mouseenter(function(){
    $("#panel").slideToggle("slow");
  })

  $("#flip1").mouseenter(function(){
    $("#panel1").slideToggle("slow");
  })

  $("#flip2").mouseenter(function(){
    $("#panel2").slideToggle("slow");
  })

  $("#flip3").mouseenter(function(){
    $("#panel3").slideToggle("slow");
  })

  $("#flip4").mouseenter(function(){
    $("#panel4").slideToggle("slow");
  })

  $("#flip5").mouseenter(function(){
    $("#panel5").slideToggle("slow");
  })

  $("#flip6").mouseenter(function(){
    $("#panel6").slideToggle("slow");
  })
});

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

 

  

