
var http = require('http');

// get the port from the environment variable "VCAP_APP_PORT"
var port = process.env.VCAP_APP_PORT || 1337;

//Start Server to written "Hello World" to all requests
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port);