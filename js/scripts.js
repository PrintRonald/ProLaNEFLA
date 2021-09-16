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
  $("#flip7").mouseenter(function(){
    $("#panel7").slideToggle("slow");
  })
  $("#flip8").mouseenter(function(){
    $("#panel8").slideToggle("slow");
  })
  $("#flip9").mouseenter(function(){
    $("#panel9").slideToggle("slow");
  })
  $("#flip10").mouseenter(function(){
    $("#panel10").slideToggle("slow");
  })
  $("#flip11").mouseenter(function(){
    $("#panel11").slideToggle("slow");
  })
  $("#flip12").mouseenter(function(){
    $("#panel12").slideToggle("slow");
  })
  $("#flip13").mouseenter(function(){
    $("#panel13").slideToggle("slow");
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
  }

  const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    Dots: false,
    on: {
      init: (carousel) => {
        carousel.$index = carousel.$container.querySelector(".carousel_index");
        carousel.$count = carousel.$container.querySelector(".carousel_count");
      },
      refresh: (carousel) => {
        if (carousel.$count) {
          carousel.$count.innerHTML = carousel.pages.length;
        }
      },
      change: (carousel) => {
        if (carousel.$index) {
          carousel.$index.innerHTML = carousel.page + 1;
        }
        if (carousel.$index) {
          carousel.$index.innerHTML = "no mostrar nada";
        }
      },
    },
  });

 

  

