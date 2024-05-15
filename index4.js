const express = require('express')
const https = require('https')
const app = express();
var listaNombres=[];
var secuencia = 1; 

app.post('/hola',(req,res)=>{
const id = secuencia++;
const nombre=req.query.name;
const edad=req.query.edad;
console.log(nombre,id,edad);

listaNombres.push({
id:id,name:nombre,edad:edad


});

res.send({

message:'se almaceno un nombre'

});

});



app.get('/hola',(req,res)=>{

res.json(listaNombres);


})



app.put('/hola', (req, res) => {
    const id = parseInt(req.query.id); 
    const n = req.query;
    const c = listaNombres.find(l => l.id === id);
    console.log(n.name)
    console.log(n.edad)

    if (c) {
        c.name = n.name;
        c.edad = n.edad;

        res.json({
            message: 'Nombre actualizado',nombre: c.name
        });
    } else {
        res.send({
            message: 'no existe el id jajaajajaja'
        });
    }
});

app.delete('/hola', (req, res) => {
    const id = parseInt(req.query.id);

    const index = list.findIndex(l => l.id === id);
    if (index !== -1) {
        list.splice(index, 1);
        res.json({ message: 'Elemento eliminado' });
    } 
});



app.listen(3000,function(){

    console.log("bien")
    
    
    });
    

    //json a manera de base de datos