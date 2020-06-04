/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/index');

describe('POST /contact', function() {
    it('Send email', function(done) {
        request(app)
          .post('/contact')
          .send({ email: 'max@gmail.com', subject: 'Assunto', text: 'Hello' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    });
});
