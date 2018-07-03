import dotEnv from 'dotenv';
import  chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import server from '../server';
import chaiHttp from 'chai-http';
import schema from '../models/schema';


chai.use(chaiHttp);
    describe('/GET Registered users', () => {
        let url = 'http://localhost:3002/api';
        it('it should GET all the users with status 200', function (done) {
          chai.request(url, function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              done();
          })
              .get('/registered')
              .end((err, res) => {
                  console.log('response of GET test--------',res.body);
                  expect(res.statusCode).to.equal(200);
                //   res.should.have.status(200);
                // expect(res.respon.should.be('array'));
                //   res.body.length.should.be.eql(0);
                done();
              });
        });
    });

  describe('/POST Registered users', () => {

    let url = 'http://localhost:3002/api';
    it('POST /users should return 200',function(done){
        chai.request(url, function(error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        })
          .post('/register')
          .set('Content-Type','application/json')
          .send(JSON.stringify({ u_name: 'test', u_email: 'testing1email@gmail.com', u_password: 'pass' }))
          .end((err, res) =>{
              console.log('response of POST test *****',res.body);
              expect(res.statusCode).to.equal(200);
        done();
          });
      });
    });






