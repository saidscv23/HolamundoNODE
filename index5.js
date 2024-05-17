const express = require('express');
const fs = require('fs');// Importa el módulo del sistema de archivos de Node.js
const app = express();
app.use(express.json());

var secuencia = 1; 

// Leer el archivo persona.json
function readDatabase() {
    return JSON.parse(fs.readFileSync('persona.json', 'utf-8'));
}

// Escribir  archivo persona.json
function writeDatabase(data) {
    fs.writeFileSync('persona.json', JSON.stringify(data, null, 2), 'utf-8');
}

// Manejar todas las solicitudes en la ruta /hola
app.all('/hola', (req, res) => {
    let listaNombres = readDatabase();
    
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
            res.status(405).send({ message: 'Método no permitido' });
    }
});

app.listen(3000, function() {
    console.log("Servidor escuchando en el puerto 3000");
});