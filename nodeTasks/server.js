const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer(function(req, res) {
    console.log(req)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end({res: 'ok'});
});
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});
