//constante que llama al framework

const express = require('express')
//servicio web de tipo get

const app = express()
console.log('esta corriendo el servicio2');
app.get('/', function (req, res) {
  //envia un mensaje de respuesta

  res.send('Hola Mundo')
  console.log('la consola esta corriendo2');
})
//segundo servicio web

app.get('/a', function (req, res){

res.send('Pineda')
console.log('la consola esta corriendo3');

})

//Definir atraves de un parametro
//localhost:3000/suma/9

app.get('/suma/:n1',(req, res)=>{
  const  num1=parseInt(req.params.n1);
  var total=11+num1;
  res.send(total+"")
  console.log('la consola esta corriendo4');
  
  })

////localhost:3000/suma/52

//Definir atraves de un parametro

app.get('/suma1/:n1',(req, res)=>{
  const  num1=parseInt(req.params.n1);
  var total=11+num1;
  const texto={
    resultado:total
  };
  res.json(texto)

  console.log('la consola esta corriendo4');
  
  });


  app.get('/suma/:n1/:n2',(req, res)=>{
    const n1=parseInt(req.params.n1);
    const n2=parseInt(req.params.n2);
    var suma=n1+n2;
    res.send(suma+"");
    });
  




// localhost:3000/resta/20/9

    app.get('/resta/:n1/:n2',(req, res)=>{

      const n1=parseInt(req.params.n1);
      
      const n2=parseInt(req.params.n2);
      
      var resta=n1-n2;
      const texto={respuesta:resta};
      resp.json(texto);
      });





     //localhost:3000/nombre?name=pineda

      app.get('/nombre',(req, res)=>{

        const datoObtener=req.query.name;
        res.send('hola'+' '+datoObtener)
        
        });

        //suma de dos numeros sin definir parametros
        //localhost:3000/sumar10?n1=12&n2=8
      
        app.get('/sumar10',(req, res)=>{

          const n1Obtener=parseInt (req.query.n1);
          const n2Obtener=parseInt (req.query.n2);
          var respuesta =n1Obtener+n2Obtener;
          res.send('hola'+' '+respuesta+"");
          
          });

      

//servicio del puerto
app.listen(3000)

