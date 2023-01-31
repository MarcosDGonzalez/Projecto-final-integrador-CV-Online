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
  document.getElementById("contacto").onclick = function(){
    document.getElementById("datos").innerHTML = "Particular: (011)21264807 <br> Celular: (+54)1133483172 <br> Email: marcosdanielgonzalez11@gmail.com <br> <a href="+"https://www.linkedin.com/in/marcos-daniel-gonzalez"+">Linkedin</a>"
  };
  document.getElementById("educacion").onclick = function(){
    document.getElementById("datos").innerHTML = "Escuela de Educación Técnica N°1 <br> Secundaria: Completo <br> Título: Bachillerato <br> Titulo: Tècnico Electronico, pendiente <br> Desde el 2007 al 2010 <br><br> Universidad Nacional Arturo Jauretche <br> Curso de Desarrollo de Java OOP y SQL: Completo <br> Desde Feb 2019 a Dic 2019 <br><br> Universidad Nacional Arturo Jauretche <br> Ingeniería Informática:Incompleto Desde 2018 a 2021"
  };
  document.getElementById("experiencia").onclick = function(){
    document.getElementById("datos").innerHTML = "Bitmix Instalaciòn y Soporte de Sistemas <br> Ayudante de Instalaciòn y Mantenimiente de Sistemas <br> Atención al cliente, Matenimiento <br><br> Pannet <br> Control de calidad <br><br> Aceros Angeleti <br> Mantenimiento <br><br> Novoplas <br> Produccion y Control de calidad"
  };

  /*document.getElementById("educacion").onclick = function(){
    document.getElementById("datos").innerHTML = ""
  };
  */
  