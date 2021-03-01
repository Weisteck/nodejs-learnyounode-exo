const http = require('http');
const url = require('url');

// let url = require('url');

const [_node, _path, port] = process.argv;

const parseTime = (time) => {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
};

const unixTime = (time) => {
    return { unixtime: time.getTime() }
};

// const parseQuery = (url) => {
//     switch (url.pathname) {
//         case '/api/parsetime':
//           return parseTime(new Date(url.query.iso))
//         case '/api/unixtime':
//           return unixTime(new Date(url.query.iso))
//         default: return 'url invalide'
//     }
// }

http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const time = new Date(parsedUrl.query.iso);
    let result;
    if (/^\/api\/parsetime/.test(request.url))
        result = parseTime(time)
    else if (/^\/api\/unixtime/.test(request.url))
        result = unixTime(time)
    
    if (result)
        response.end(JSON.stringify(result))
    else
        response.end('pas de reponse')

    // if ( request.method === 'GET') {
    //     url = url.parse(request.url, true)
    //     response.end(JSON.stringify(parseQuery(url)))
    // } else response.end()
}).listen(port)