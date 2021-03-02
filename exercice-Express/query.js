const express = require('express');

const app = express()

const [_node, _path, port ] = process.argv;

app.get('/search', ({query}, response) => response.send(query)).listen(port);