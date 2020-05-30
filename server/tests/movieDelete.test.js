const assert = require('assert');
const request = require('supertest');
const app = require('../index');

it('should return error of deleting one movie', (done) => {
  request(app)
    .delete('/api/movie/123')
    .expect((response) => {
      assert.equal(response.body.message, 'Can not delete movie');
    })
    .end(done);
});
