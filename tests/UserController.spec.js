/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/index');

describe('GET /users', function() {
    it('Collect all users', function(done) {
      request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('GET /users/:id', function() {
    it('Collect specific user', function(done) {
      request(app)
        .get('/users/3')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('POST /users', function() {
  it('Insert user in the database', function(done) {
    request(app)
      .post('/users')
      .send({ username: 'john', email: 'john@gmail.com', password: '123' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('PUT /users/:id', function() {
  it('Insert user in the database', function(done) {
    request(app)
      .put('/users/1')
      .send({ username: 'john', password: '123456' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('DELETE /users/:id', function() {
  it('Delete user in the database', function(done) {
      request(app)
        .delete('/users/1')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
  });
});
