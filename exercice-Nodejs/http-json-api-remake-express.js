const express = require('express');

const app = express();

app.get('/api/parsetime', (request, response) => {
    const date = new Date(request.query.iso);
    const playload = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
    response.json(playload)
});

app.get('/api/unixtime', (request, response) => {
    const date = new Date(request.query.iso);
    const playload = {
        unixtime: date.getTime()
    }
    response.json(playload)
})

// a completer