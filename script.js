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
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

// Conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',    // Cambia estos valores
    password: 'tu_contraseña',
    database: 'loginDB'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos');
});

// Configurar body-parser para manejar datos POST
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar el formulario de inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Inserta los datos en la base de datos
    const query = 'INSERT INTO usuarios (username, password) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.error('Error al guardar los datos:', err);
            res.status(500).send('Error al guardar los datos');
        } else {
            res.send('Datos guardados correctamente en la base de datos');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
