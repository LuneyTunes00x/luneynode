var http = require('http');
var n = require('./luneymodulo');
var datinha = require('./luneydata');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('a yang e muito fofinhaaaaarr uwu <br>');
    res.write(n.nome()+'<br>');
    res.write(datinha.diaDaSemana()+'<br>');
    res.end('o kyrie tbm e mt gatorrrrr c:');
}).listen(80);