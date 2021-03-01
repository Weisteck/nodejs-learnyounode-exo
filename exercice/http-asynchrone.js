// Premiere methode

const http = require('http');

const [_node, _path, ...linkHttp] = process.argv;


const resultFinal = {};

// ce que j'avais fait
linkHttp.forEach(url => 
    http.get(url, response => {
        let tempData = ''
        response.setEncoding('utf-8')
        response.on('data', data => {
            tempData += data
        });
        response.on('end', () => {
            const result = tempData;
            resultFinal[url] = result;
            if (Object.keys(resultFinal).length === linkHttp.length) {
                linkHttp.forEach(url => console.log(resultFinal[url]));
            }
        });
    }) 
)

