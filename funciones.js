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

  document.getElementById('info').onclick = function(){
    document.getElementById("datos").innerHTML = "mis datos"
  };
  