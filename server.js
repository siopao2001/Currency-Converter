const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    const myReadStream = fs.createReadStream(__dirname + '/popup.html', 'utf-8');
    myReadStream.pipe(res);
  }
);

server.listen(3000)
console.log("listening at port 3000")