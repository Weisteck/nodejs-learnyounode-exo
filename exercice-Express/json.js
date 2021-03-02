const express = require('express');
const fs = require('fs')

const app = express()

const [_node, _path, port, fileName ] = process.argv;

app.get('/books', (request, response) => {
        fs.readFile(fileName, (error, data) => {
            if(error) response.send(500)
            response.json(JSON.parse(data))
        })
}).listen(port)