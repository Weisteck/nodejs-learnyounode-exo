const http = require('http')

const [_node, _path, linkHttp] = process.argv

http.get(linkHttp, reponse => {
    reponse.setEncoding('utf-8');
    reponse.on('data', data => console.log(data));
    reponse.on('error', err => console.error(err));
});