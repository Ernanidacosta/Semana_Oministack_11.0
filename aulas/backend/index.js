const express = require('express');

const app = express();

app.get('/users', (request, response) => {
    const params = request.query;

    console.log(params);
    
    return response.json({
        evento: 'Semana Oministack 11',
        aluno: 'Ernani da Costa',
    });    
});

app.listen(3333);
