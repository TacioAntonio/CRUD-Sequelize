/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/index');

describe('POST /login', function() {
    it('Insert user in the database', function(done) {
        request(app)
          .post('/login')
          .send({ email: 'max@gmail.com', password: '123458910-200' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    });
});

describe('DELETE /logout', function() {
    it('User logout', function(done) {
        request(app)
          .delete('/logout')
          .send({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlhMjAweDFAZ21haWwuY29tIiwiaWF0IjoxNTkxMjI3Nzk1LCJleHAiOjE1OTEzMTQxOTV9.DtYH3rSO-ClxXoXTigmYGHSiPMCesYJpTCTeQx8fjYE' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            if (err) return done(err);
            done();
          });
    });
});
