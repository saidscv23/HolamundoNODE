const express = require('express');
const fs = require('fs');// Importa el módulo del sistema de archivos de Node.js
const app = express();
app.use(express.json());

var secuencia = 1; // Variable para mantener la secuencia de IDs

// Leer el archivo persona.json
function readDatabase() {
    return JSON.parse(fs.readFileSync('persona.json', 'utf-8'));
}

// Escribir  archivo persona.json
function writeDatabase(data) {
    fs.writeFileSync('persona.json', JSON.stringify(data, null, 2), 'utf-8');
}

function inicializar() {
    const listaNombres = readDatabase();
    const id = listaNombres.reduce((max, item) => item.id > max ? item.id : max, 0);
    secuencia = id + 1;
}

inicializar();


// Manejar todas las solicitudes en la ruta /hola
app.all('/hola', (req, res) => {
    var listaNombres = readDatabase();//Lee el contenido del archivo persona.json y lo almacena en la variable listaNombres.
    
    switch (req.method) {
        case 'POST':
            const nombre = req.query.name;
            const edad = req.query.edad;
            const id = secuencia++;
            console.log(nombre, id, edad);

            listaNombres.push({
                id: id,
                name: nombre,
                edad: edad
            });

            writeDatabase(listaNombres);

            res.send({
                message: 'Se almacenó un nombre'
            });
            break;

        case 'GET':
            res.json(listaNombres);
            break;

        case 'PUT':
            const idPut = parseInt(req.query.id);
            const n = req.query;
            const c = listaNombres.find(l => l.id === idPut);

            if (c) {
                c.name = n.name;
                c.edad = n.edad;

                writeDatabase(listaNombres);

                res.json({
                    message: 'Nombre actualizado',
                    nombre: c.name
                });
            } else {
                res.send({
                    message: 'No existe el ID'
                });
            }
            break;

        case 'DELETE':
            const idDelete = parseInt(req.query.id);
            const index = listaNombres.findIndex(l => l.id === idDelete);

            if (index !== -1) {
                listaNombres.splice(index, 1);
                writeDatabase(listaNombres);
                res.json({ message: 'Elemento eliminado' });
            } else {
                res.send({
                    message: 'No existe el ID'
                });
            }
            break;

        default:
        
    }
});

app.listen(3000, function() {
    console.log("Servidor escuchando en el puerto 3000");
});