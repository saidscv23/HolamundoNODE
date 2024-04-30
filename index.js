
//Uso Protocolo HTTP
var http=require('http');
// Creacion de un servidor usando HTTP
var server=http.createServer();
//metodo que perimite configurar
function mensaje(petision,resp){
//1. el estado del servidor a traves de un texto
resp.writeHead(200,{'content-type':'text/plain'});
//mensaje mostrar
resp.write("BIENVENIDOS AMIGOS UwUUUUU");
//Finaliza la respuesta
resp.end();
}
//cuando tenga un requerimiento por parte de un cliente envie a presentar la funcion respuesta
server.on('request',mensaje);
server.listen(3000,function(){
console.log('la consola esta corriendo');
})