document.addEventListener("DOMContentLoaded", function() {
  // selecciona todos los enlaces del menu
  let enlaces = document.querySelectorAll("nav a");

  // recorrer cada enlace
  enlaces.forEach(enlace => { // Cambiado "enlaces" a "enlace"
    // agrega evento mouseover
    enlace.addEventListener("mouseover", function() {
      // cambia color texto pasar mause
      this.style.color = "#FFFF00";
    });
    //agrega el evento mouseout
    enlace.addEventListener("mouseout", function() {
      this.style.color = "";
    });
  });
});
