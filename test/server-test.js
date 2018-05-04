const supertest = require('supertest');
const server = require('../server');

describe('Testes para o server.js', () => {

  describe('Testando o caminho get/webhook com query params', () => {

    let hub = {
      mode: 'subscribe',
      verify_token: 'jNmYkDS24V',
    };

    //caminho feliz
    it('1 - Tem que retornar status 200 e hub.challenge quando todos os parametros estiverem certos', (done) => {
      supertest(server)
        .get('/webhook?hub.mode=' + hub.mode + '&hub.verify_token=' + hub.verify_token)
        .expect(200, done)
    })


     it('2 - Tem que retornar 403 quando não passar nenhum parâmetro', (done) => {
      supertest(server)
        .get('/webhook')
        .expect(403, done)
    });

     it('3 - Tem que retornar 403 quando o parametro hub.verifyToken estiver errado', (done) => {
      supertest(server)
      .get('/webhook?hub.mode=' + hub.mode + '&hub.verify_token=' + 'ERRO')
        .expect(403, done)
    });

    it('4 - Tem que retornar 403 se o hub.mode estiver incorreto', (done) => {
      supertest(server)
        .get('/webhook?hub.mode=' +'ERRO' + '&hub.verify_token=' + hub.verify_token )
        .expect(403, done)
    });
  });
}); 
