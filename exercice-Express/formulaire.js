const express = require('express');
const bodyParser = require('body-parser')

const app = express()

const [_node, _path, port ] = process.argv;

// ce middleware qui nous permet d'analyser les corps
app.use(bodyParser.urlencoded());

app.post('/form', (request, response) => 
    response.send(request.body.str.split('').reverse().join(''))).listen(port);