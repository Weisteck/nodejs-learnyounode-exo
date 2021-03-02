const fs = require('fs');
const http = require('http');

const [_node, _path, portServer, locationFile ] = process.argv;

http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(locationFile).pipe(response)
}).listen(portServer, () => {
    console.log(portServer, locationFile)
})