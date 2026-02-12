document.addEventListener("DOMContentLoaded", function() {
  // selecciona todos los enlaces del menu
  let enlaces = document.querySelectorAll("nav a");

  // recorrer cada enlace
  enlaces.forEach(enlace => {
    // agrega evento mouseenter
    enlace.addEventListener("mouseenter", function() {
      // cambia color texto pasar mause
      this.style.color = "#93b6cf";
    });
    //agrega el evento mouseleave
    enlace.addEventListener("mouseleave", function() {
      this.style.color = "";
    });
  });

  // Selecciona todas las imágenes con la clase "zoomable-image"
  let zoomableImages = document.querySelectorAll(".zoomable-image");

  // Itera sobre cada imagen
  zoomableImages.forEach(image => {
    // Guarda el tamaño original de la imagen
    let originalWidth = image.width;
    let originalHeight = image.height;

    // Agrega el evento mouseenter
    image.addEventListener("mouseenter", function() {
      // Aumenta el tamaño de la imagen
      image.style.width = (originalWidth * 1.1) + "px";
      image.style.height = (originalHeight * 1.1) + "px";
      image.style.transition = "transform 0.3s ease"; // Agrega una transición suave
    });

    // Agrega el evento mouseleave
    image.addEventListener("mouseleave", function() {
      // Restaura el tamaño original de la imagen
      image.style.width = originalWidth + "px";
      image.style.height = originalHeight + "px";
      image.style.transition = "transform 0.3s ease"; // Agrega una transición suave
    });
  });

  // Redirigir a la página de detalles del curso al hacer clic
  let cursos = document.querySelectorAll(".curso, .curso-destacado");
  cursos.forEach(curso => {
    curso.addEventListener("click", function() {
      // Obtener el título del curso
      let tituloCurso = this.querySelector("h4").textContent;

      // Redirigir a la página de servicios con el título del curso como parámetro
      window.location.href = "servicios.html?curso=" + tituloCurso;
    });
  });
});


  // Selecciona el formulario de contacto
  const formularioContacto = document.querySelector("#contacto form");

  // Si el formulario de contacto existe
  if (formularioContacto) {
    // Selecciona los campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const mensajeInput = document.querySelector("#mensaje");

    // Agrega un "escuchador de eventos" al campo de nombre
    nombreInput.addEventListener("input", function() {
      // Valida el campo de nombre
      if (nombreInput.value.trim() === "") {
        // Si el campo está vacío, muestra un mensaje de error
        nombreInput.setCustomValidity("Por favor, introduce tu nombre.");
      } else {
        // Si el campo no está vacío, elimina el mensaje de error
        nombreInput.setCustomValidity("");
      }
    });

    // Agrega un "escuchador de eventos" al campo de email
    emailInput.addEventListener("input", function() {
      // Valida el campo de email
      if (emailInput.value.trim() === "") {
        // Si el campo está vacío, muestra un mensaje de error
        emailInput.setCustomValidity("Por favor, introduce tu email.");
      } else if (!isValidEmail(emailInput.value)) {
        // Si el email no es válido, muestra un mensaje de error
        emailInput.setCustomValidity("Por favor, introduce un email válido.");
      } else {
        // Si el email es válido, elimina el mensaje de error
        emailInput.setCustomValidity("");
      }
    });

    // Agrega un "escuchador de eventos" al campo de mensaje
    mensajeInput.addEventListener("input", function() {
      // Valida el campo de mensaje
      if (mensajeInput.value.trim() === "") {
        // Si el campo está vacío, muestra un mensaje de error
        mensajeInput.setCustomValidity("Por favor, introduce tu mensaje.");
      } else {
        // Si el campo no está vacío, elimina el mensaje de error
        mensajeInput.setCustomValidity("");
      }
    });

    // Función para validar el formato de email
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Agrega un "escuchador de eventos" al evento "submit" del formulario
    formularioContacto.addEventListener("submit", function(event) {
      // Evita que el formulario se envíe de forma predeterminada
      event.preventDefault();

      // Muestra un mensaje de confirmación
      alert("¡Gracias por tu mensaje! Lo hemos recibido correctamente.");

      // Reinicia el formulario
      formularioContacto.reset();
    });
  }
