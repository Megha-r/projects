//*****************************  Call the packages required********************************************/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('./config')
var morgan      = require('morgan');

app.set('superSecret',config.secret);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;          // set our port
var router = express.Router();              // get an instance of the express Router


//****************************************************** DataBase ********************************************* */

var mongoDB = 'mongodb://localhost:27017/myfirstApp';

mongoose.connect(mongoDB);

var Users = require('./models/users.js');

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});


//**************************************************  Server listening **************************************** */
app.listen(port);
console.log('Listening on port ' + port);



//**************************************************** Routes ************************************************** */




app.use('/api', router);
router.route('/users')

    .post(function (req, res) {
         console.log('body--->>>>>>>', req.body);
        // console.log('params--->>>>>>>', req.params);
        // console.log('query--->>>>>>>', req.query);
        var users = new Users();
        users.username = req.body.username
        users.email = req.body.email
        users.name = req.body.name
        users.password = req.body.password
        users.admin = req.body.admin
        console.log("response ", res.body)
        users.save(function (err) {
            if (err)
                res.status(err).send(err);
            res.status(200).json({ message: "Unique id of user created by mongo" });
        });


    })
    .get(function (req, res) {
        //sres.json({ message: 'hooray! welcome to our api!' });
        console.log("<<<<<<<<<<<<", res.body)
        Users.find(function (err, resp) {
            if (err)
                res.status(err).send(err);
            console.log('data----------->', resp);
            res.status(200).json(resp);
        });

    });

app.use('/api', router);
router.route('/users/:users_id')

    .get(function (req, res) {
        console.log("----------->", req.params.users_id)
        Users.findById(req.params.users_id, function (err, resp) {
            if (err)
                res.send(err);
            res.json(resp);
        });
    })

    .put(function (req, res) {
        var users = new Users();
       
        Users.findById(req.params.users_id, function (err, resp) {
            if (err)
                res.send(err);
                console.log("----------->", resp)

            resp.name = req.body.name;
            // Users.update({"username":"megha2010"},{$set:{"name":"Jasmit"}}, function(err, resp) {

            resp.save(function (err) {

                if (err)
                    res.status(err).send(err);

                res.status(200).json({ message: "Updated" });


            });
        });

    })

// .delete(function(req, res)
//  {
//     var users = new Users();
//     users.dropUser({
//         _id: ObjectId("5af420913aa9d1462199692f")

//     }, function(err, resp) {
//         if (err)
//             res.send(err);
// console.log(resp)
//         res.json(resp);
//     });
// })

.delete( function (req, res) {



Users.remove({
    _id: req.params.users_id
}, function(err, bear) {
    if (err)
        res.send(err);

    res.status(200).json({ message: 'Successfully deleted' });
});
});

//************************************* Authenticate ******************************* */
app.use('/api', router);
app.get('/setup',function(req,res){
    var deep = new Users ({
      name : 'Deepak',
      username: 'deep94',
      email: 'deepak94@yahoo.com',
      password : 'password',
      admin : true      
    });
    deep.save(function(err){
        console.log(req.body);
        if(err) throw err;
        console.log('Admin save successfully');
        res.json({success:true});
    });

});


router.get('/users', function(req, res) {
    User.find({}, function(err, users) {
      res.json(users);
    });
  });   
  


app.use('/api', router);
router.route('/authenticate')
.post(function(req,res){
    Users.findOne({
        name: req.body.name
      }, function(err, user) {
    console.log("---------->", req.body.name)
        if (err) throw err;
    
        if (!user) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
    
          // check if password matches
          if (user.password != req.body.password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {
    
            // if user is found and password is right
            // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password
        const payload = {
          admin: user.admin 
        };
            
        var token = jwt.sign(payload, app.get('superSecret'), {
            //expiresInMinutes: 1440 // expires in 24 hours
            });
    
            // return the information including token as JSON
            res.json({
              success: true,
              message: 'Enjoy your token!',
              token: token
            });
          }   
    
        }
    
      });
    });

    router.use(function(req, res, next) {

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
      
        // decode token
        if (token) {
      
          // verifies secret and checks exp
          jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
            if (err) {
              return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
              // if everything is good, save to request for use in other routes
              req.decoded = decoded;    
              next();
            }
          });
      
        } else {
      
          // if there is no token
          // return an error
          return res.status(403).send({ 
              success: false, 
              message: 'No token provided.' 
          });
      
        }
      });
   
      // apply the routes to our application with the prefix /api
      app.use('/api', router);
