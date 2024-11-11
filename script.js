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
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Configurar body-parser para manejar datos POST
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el formulario de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const data = `Usuario: ${username}, Contraseña: ${password}\n`;

    // Guardar los datos en el archivo usuarios.txt
    fs.appendFile('usuarios.txt', data, (err) => {
        if (err) {
            console.error('Error al guardar los datos:', err);
            res.status(500).send('Error al guardar los datos');
        } else {
            res.send('Datos guardados correctamente');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
