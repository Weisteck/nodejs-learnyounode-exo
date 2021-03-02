const http = require('http');
const th2map = require('through2-map');

const [_node, _path, post] = process.argv;

http.createServer((request, response) => {
    if(request.method !== 'POST')
        return response.end('pas de POST');
    // si apres la fonction on ne mets pas d accolade cela fait un return automatiquement
    request.pipe(th2map((result) => result.toString().toUpperCase())).pipe(response);
}).listen(post);