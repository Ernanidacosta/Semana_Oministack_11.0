const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Oministack 11',
        aluno: 'Nito da Costa',
    });    
});
module.exports = routes;