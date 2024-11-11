// script.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "usuarioEjemplo" && password === "contraseñaEjemplo") {
        alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir a otra página o continuar con otra acción
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
});
