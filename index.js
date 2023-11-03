const http = require('http');
const colors =require('colors');

const handleServer = function(req,res){
  res.writeHead(200,{ 'content-type':'text/html' });
  res.write('<h1>Hello World!</h1>');
  res.end();
};


const server = http.createServer(handleServer);

server.listen(3000,function(){
  console.log('Servidor on port 3000'.green);
});






