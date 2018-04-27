const supertest = require('supertest');
const server = require('../server');

describe('server', () => {
  describe('GET /webhook', () =>
    it('responds with OK', () =>
      supertest(server)
        .get('/webhook')
        .expect(403)
    )
  );
});

describe('server', () => {
    describe('GET /webhook', () =>
      it('responds with OK', () =>
        supertest(server)
          .get('/webhook?hub.mode=subs&hub.verify_token=0')
          .expect(403)
      )
    );
  });

  describe('server', () => {
    describe('GET /webhook', () =>
      it('responds with OK', () =>
        supertest(server)
          .get('/webhook?hub.mode=subscribe&hub.verify_token=subscribe')
          .expect(200)
      )
    );
  });

