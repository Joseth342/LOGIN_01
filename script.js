document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    if (username === "" || password === "") {
      errorMsg.textContent = "Por favor, completa todos los campos.";
    } else {
      errorMsg.textContent = "";
      // Aquí puedes agregar lógica para verificar usuario/contraseña
      alert("¡Bienvenido, " + username + "!");
    }
  });
  
  