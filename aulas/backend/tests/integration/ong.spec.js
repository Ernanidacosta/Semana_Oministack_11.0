const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection');


describe('ONG', ()=>{
    beforeEach(async() => {
        await connection.migrate.latest();
    });

    it('shoud be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Lauana",
            email: "contato@mail.com",
            whatsapp: "5581999998584",
            city: "recife",
            uf: "PE"	
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});