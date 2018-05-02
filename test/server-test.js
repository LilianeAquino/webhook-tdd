const supertest = require('supertest');
const server = require('../server');

describe('Testes para o server.js', () => {

  describe('GET /webhook', () =>{
//webhook sem os parâmetros = 403
    it('responds with no Ok', () =>{
      supertest(server)
        .get('/webhook')
        .expect(403)
    });
//webhook com os parâmetros inválidos = 403
    it('responds with no Ok', () =>{
      supertest(server)
        .get('/webhook?hub.mode=subs&hub.verify_token=0')
        .expect(403)
    });
//webhook com os parâmetros corretos = 200
    it('responds with Ok', () =>{
      supertest(server)
        .get('/webhook?hub.mode=subscribe&hub.verify_token=subscribe')
        .expect(200)
    });
  });
  
});