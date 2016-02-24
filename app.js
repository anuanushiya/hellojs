var http = require('http');

// get the port from the environment variable "VCAP_APP_PORT"
var port = 8083;
var host = "0.0.0.0";

//Start Server to written "Hello World" to all requests
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\nThis is Sample nOdeJs application\n');
}).listen(port,host);

console.log('Server running at http://0.0.0.0:'+port);
