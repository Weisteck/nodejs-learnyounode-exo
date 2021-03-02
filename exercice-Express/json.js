const express = require('express');
const fs = require('fs')

const app = express()

const [_node, _path, port, fileName ] = process.argv;

// _ devant une variable indique qu'on ne s'en sert pas mais quel doit etre la
app.get('/books', (_request, response) => {
        fs.readFile(fileName, (error, data) => {
            if(error) response.sendStatus(500);
            response.json(JSON.parse(data))
        })
}).listen(port)