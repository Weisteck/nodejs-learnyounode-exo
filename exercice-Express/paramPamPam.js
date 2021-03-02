const express = require('express');
const crypto = require('crypto');

const app = express()

const [_node, _path, port ] = process.argv;

app.put('/message/:id', (request, response) => {
    const hash = crypto.createHash('sha1')
        .update(new Date().toDateString() + request.params.id).digest('hex');
    response.send(hash);
}).listen(port)