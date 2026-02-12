//hace que el menu salga la letra y el fondo de azul usando el mouseenter y mouseleave
document.addEventListener("DOMContentLoaded", function() {
  let enlaces = document.querySelectorAll("nav a");
  enlaces.forEach(enlace => {
    enlace.addEventListener("mouseenter", function() {
      this.style.color = "#93b6cf";
    });
    enlace.addEventListener("mouseleave", function() {
      this.style.color = "";
    });
  });

  //-------------------------------------------------------------------------------
  //hace zomm a las imagenes con los eventos mouseenter(pasa raton) mouseleave(sale raton)
  let zoomableImages = document.querySelectorAll(".zoomable-image");
  zoomableImages.forEach(image => {
    let originalWidth = image.width;
    let originalHeight = image.height;
    image.addEventListener("mouseenter", function() {
      image.style.width = (originalWidth * 1.1) + "px";
      image.style.height = (originalHeight * 1.1) + "px";
      image.style.transition = "transform 0.3s ease";
    });
    image.addEventListener("mouseleave", function() {
      image.style.width = originalWidth + "px";
      image.style.height = originalHeight + "px";
      image.style.transition = "transform 0.3s ease"; 
    });
  });
  //----------------------------------------------------------------------
  //redirige a la pagina servicios
  let cursos = document.querySelectorAll(".curso, .curso-destacado");
   cursos.forEach(curso => {
    curso.addEventListener("click", function() {
      let tituloCurso = this.querySelector("h4").textContent;
      window.location.href = "servicios.html?curso=" + tituloCurso;
    });
   });
  });
  //------------------------------------------------------------------------
  //autocompleta el registro en contacto
  const formularioContacto = document.querySelector("#contacto form");

  if (formularioContacto) {
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const mensajeInput = document.querySelector("#mensaje");
    nombreInput.addEventListener("input", function() {
      if (nombreInput.value.trim() === "") {
        nombreInput.setCustomValidity("Por favor, introduce tu nombre.");
      } else {
        nombreInput.setCustomValidity("");
      }
    });

    emailInput.addEventListener("input", function() {
      if (emailInput.value.trim() === "") {
        emailInput.setCustomValidity("Por favor, introduce tu email.");
      } else if (!isValidEmail(emailInput.value)) {
        emailInput.setCustomValidity("Por favor, introduce un email válido.");
      } else {
        emailInput.setCustomValidity("");
      }
    });

    mensajeInput.addEventListener("input", function() {
      if (mensajeInput.value.trim() === "") {
        mensajeInput.setCustomValidity("Por favor, introduce tu mensaje.");
      } else {
        mensajeInput.setCustomValidity("");
      }
    });

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  };
