const assert = require('assert');
const request = require('supertest');
const app = require('../index');

it('should post one movie', (done) => {
  request(app)
    .post('/api/movie/')
    .send({
      title: 'Title',
      releaseYear: '2000',
      format: 'DVD',
      stars: ['star one', 'star two', 'star three'],
    })
    .expect((response) => {
      assert.equal(response.body.message, 'Movie was successfully added');
    })
    .end(done);
});

it('should return error of empty title', (done) => {
  request(app)
    .post('/api/movie/')
    .send({
      title: '',
      releaseYear: '2000',
      format: 'DVD',
      stars: ['star one, star two, star three'],
    })
    .expect((response) => {
      assert.equal(response.body.message, '"title" is not allowed to be empty');
    })
    .end(done);
});

it('should return error of release year', (done) => {
  request(app)
    .post('/api/movie/')
    .send({
      title: 'title',
      releaseYear: '1800',
      format: 'DVD',
      stars: ['star one, star two, star three'],
    })
    .expect((response) => {
      assert.equal(response.body.message, '"releaseYear" must be greater than 1900');
    })
    .end(done);
});

it('should return error of release year', (done) => {
  request(app)
    .post('/api/movie/')
    .send({
      title: 'title',
      releaseYear: '9999',
      format: 'DVD',
      stars: ['star one, star two, star three'],
    })
    .expect((response) => {
      assert.equal(response.body.message, '"releaseYear" must be less than 2021');
    })
    .end(done);
});

it('should return error of format', (done) => {
  request(app)
    .post('/api/movie/')
    .send({
      title: 'title',
      releaseYear: '2000',
      format: 'kek',
      stars: ['star one, star two, star three'],
    })
    .expect((response) => {
      assert.equal(response.body.message, '"format" must be one of [DVD, VHS, Blu-Ray]');
    })
    .end(done);
});

it('should return error of stars array', (done) => {
  request(app)
    .post('/api/movie/')
    .send({
      title: 'title',
      releaseYear: '2000',
      format: 'DVD',
      stars: 'something',
    })
    .expect((response) => {
      assert.equal(response.body.message, '"stars" must be an array');
    })
    .end(done);
});
