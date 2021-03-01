const http = require('http');
const th2map = require('through2-map');

const [_node, _path, post] = process.argv;

http.createServer((request, response) => {
    if(request.method != 'POST')
        return response.end('pas de POST');
    request.pipe(th2map((result) => {
        return result.toString().toUpperCase();
    })).pipe(response);
}).listen(post);