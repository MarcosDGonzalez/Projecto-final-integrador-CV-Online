
  //no me permitia referenciar a un archivo json local asi que opte por este metodo
  const datosPersonales='{"cuil": "20-36069574-4", "fechaNacimiento": "19/07/1991", "nacionalidad": "Argentino", "estado": "soltero", "hijos": 0, "idiomas": "Español nativo, Ingles Bilingue", "conocimientos": "C#, Java, Python, SQL, OOP, Microsoft Office, Autocad, Mantenimiento y Reparacion de Systemas, Electronica","Particular": "(011)21264807"}';
  const info=JSON.parse(datosPersonales);
  const datosContacto='{"particular": "(011)21264807", "celular": "(+54)1133483172", "email": "marcosdanielgonzal ez11@yahoo.com.ar"}';
  const contact=JSON.parse(datosContacto);

  document.getElementById("informacion").onclick = function(){
    document.getElementById("datos").innerHTML = "Cuil:"+info.cuil+"<br> Fecha de Nacimiento:"+ info.fechaNacimiento+" <br> Estado:Soltero"+info.estado+" <br> Hijos/as:"+info.hijos+" <br> Idiomas:"+info.idiomas+" <br> Conocimientos:"+info.conocimientos
  };
  document.getElementById("contacto").onclick = function(){
    document.getElementById("datos").innerHTML = "Particular: "+ contact.particular +"<br> Celular: "+ contact.celular +" <br> Email: "+ contact.email +" <br> <a href="+"https://www.linkedin.com/in/marcos-daniel-gonzalez"+">Linkedin</a>"
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
  