const express = require('express');

const app = express();

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Oministack 11',
        aluno: 'Nito da Costa',
    });    
});

app.listen(3333);
