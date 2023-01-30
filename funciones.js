/*$(document).ready(function(){
    $(getElementById(info)).click(function(){
        $(getElementById(datos)).fadeIoggle();
    })
});*/

/*$(getElementById(info)).click(function() {
    if ($(getElementById(datos)).css("display") == "none") {
      $(getElementById(datos)).fadeIn();
    } else {
      $(getElementById(datos)).fadeOut();
    }
  });*/

  /*function accion (){
    
        if (getElementById(datos).css("display") == "none") {
            getElementById(datos).fadeIn();
          } else {
            getElementById(datos).fadeOut();
          }
    
  }*/

  document.getElementById("informacion").onclick = function(){
    document.getElementById("datos").innerHTML = "Cuil:20-36069574-4 <br> Estado:Soltero <br> Hijos/as:0 <br> Idiomas:Español nativo, Ingles Bilingue <br> Conocimientos:C#, Java, Python, SQL, OOP, Microsoft Office, Autocad, Mantenimiento y Reparacion de Systemas, Electronica"
  };
  