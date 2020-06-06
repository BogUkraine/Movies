const assert = require('assert');
const request = require('supertest');
const app = require('../index');

it('should get movies', (done) => {
  request(app)
    .get('/api/movie/510')
    .expect((response) => {
      assert.equal(response.body.message, 'Movies were successfully got');
    })
    .end(done);
});

it('should get one movie by id', (done) => {
  request(app)
    .get('/api/movie/1')
    .expect((response) => {
      assert.equal(response.body.message, 'Movie was successfully got');
    })
    .end(done);
});

it('should get movies user was searching', (done) => {
  request(app)
    .get('/api/movie/search/something')
    .expect((response) => {
      assert.equal(response.body.message, 'Movies were successfully found');
    })
    .end(done);
});
