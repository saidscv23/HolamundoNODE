
var http=require('http');
// A traves del protocolo creamos un servidor y lo almacenamos en server
var server=http.createServer();
//metodo que perimite configurar
function mensaje(petision,resp){
//1. el estado del servidor a traves de un texto
resp.writeHead(200,{'content-type':'text/plain'});
//mensaje mostrar
resp.write("BIENVENIDOS AMIGOS UGUUUUU");
//Finaliza la respuesta
resp.end();

}

server.on('request',mensaje);
server.listen(3000,function(){

console.log('la consola esta corriendo');


})