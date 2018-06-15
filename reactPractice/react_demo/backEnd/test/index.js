import { chai, expect } from 'chai';
import { describe, it } from 'mocha';
import server from '../server';
import { chaiHttp } from 'chai-http';
import schema from '../models/schema';
chai.use(chaiHttp);


process.env.NODE_ENV = 'test';


    describe('/GET Registered users', () => {
        let url = 'http://localhost:3002/api/registered';
        it('it should GET all the users with status 200', function (done) {
          request(url, function(error, response, body) {
              expect(response.statusCode).to.equal(200);
              done();
          })
              .get('/registered')
              .end((err, res) => {
                  console.log('response of GET test--------',res);
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
                done();
              });
        });
    });

  describe('/POST Registered users', () => {

    it('POST /users should return 200',function(done){
        request()
          .post('/register')
          .set('Content-Type','application/json')
          .write(JSON.stringify({ u_name: 'test', u_email: 'testing.email@gmail.com', u_password: 'pass' }))
          .expect(200,done);
      });
    });



