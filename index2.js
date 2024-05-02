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



          
  


  
// resta sin parametros y json
// localhost:3000/restar10?n1=20&n22=10
app.get('/restar10',(req, res)=>{

const n1=parseInt(req.query.n1);
const n2=parseInt(req.query.n2);
var resultado =0;
if(n1>n2){

  resultado=n1-n2;
}else{
  resultado=n2-n1;

}
const resul={total:resultado};
res.json(resul);

}); 

//http//localhost:3000/conejos?p=5&nPar=5&nCri=3&tMor=20
app.get('/conejos',(req,res)=>{
  var pActual=0,pMuere=0,pTotal=0,numCrias=0,parejas=0;
  //periodo
  const peri=parseInt(req.query.p);
  //número de parejas conejos
  const nParejas=parseInt(req.query.nPar);
  //número de crías
  const nCrias=parseInt(req.query.nCri);
  //tasa de Mortalidad
  const tMort=parseInt(req.query.tMor);

  // Lista para almacenar los resultados por período
  const resultadosT = [];

  for(let i=0;i<=peri;i++){
      if(i==0){
      parejas=nParejas;
      pActual=nParejas*2; 
      pMuere=pActual*tMort/100;
      pTotal=pActual-pMuere;}
      else{
          numCrias=nParejas*nCrias;
          pActual+=numCrias;
          pMuere=pActual*tMort/100;
          pTotal=pActual-pMuere;
          parejas=pTotal/2;
      }
   
      const resultados={periodo: i,pAnual:pActual,
                        pMorir:pMuere,
                        pRestante:pTotal,
                        nParejas:parejas,
                        nCrias:numCrias};


                        

                        resultadosT.push(resultados);


  }
  res.json(resultadosT);

});


//servicio del puerto
app.listen(3000)

