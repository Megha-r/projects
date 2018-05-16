//*****************************  Call the packages required********************************************/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var config = require('./config')
var morgan = require('morgan');
var request = require("request");
app.set('mySecret', config.secret);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;          // set our port
var router = express.Router();              // get an instance of the express Router


//****************************************************** DataBase ********************************************* */

var mongoDB = 'mongodb://localhost:27017/myfirstApp';

mongoose.connect(mongoDB);


var Users = require('./models/users.js');

const roleOfUser;
app.get('/', function (req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});


//**************************************************  Server listening **************************************** */
app.listen(port);
console.log('Listening on port ' + port);



//**************************************************** Routes ************************************************** */


app.use('/api', router)
router.route('/post_users')

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
        users.role = req.body.role
        console.log("response ", res.body)
        users.save(function (err) {
            if (err)
                res.status(err).send(err);
            res.status(200).json({ message: "Unique id of user created by mongo" });
        });


    })
    .delete(function (req, res) {
        Users.remove({
            _id: req.params.users_id
        }, function (err, bear) {
            if (err)
                res.send(err);

            res.status(200).json({ message: 'Successfully deleted' });
        });
    });

//************************************* Authenticate ******************************* */
router.route('/authenticate')
    .post(function (req, res) {
        Users.findOne({
            username: req.body.username
        }, function (err, user) {
            //console.log("---------->", req.body.username)
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
                        id: user._id
                    };

                    var token = jwt.sign(payload, app.get('mySecret'), {
                        //expiresInMinutes: 1440 // expires in 24 hours
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Your Secret token!',
                        token: token
                    });
                }

            }

        });
    });



// function checkRole(roleOfUser){
//    if(roleOfUser == "user")
//    return next()

//    else  
//   //return res.json({ success: false, message: 'Access to get all users record not granted' });
//   console.log("Not a user");
//   return 0

// }



router.use('/users', function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('mySecret'), function (err, decoded) {
            console.log(token);
            //console.log("*********",decoded);
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            }
            else {
                req.decoded = decoded;
                console.log("***************************", decoded.id);
                var a_id = decoded.id;
                if (decoded.id) {
                    Users.findOne({ _id: decoded.id }, function (err, document) {
                        if (err) {
                            return res.json({ success: false, message: 'Failed to find user.' });
                        }
                        else {
                            roleOfUser = document.role;
                            if ((document.role === "admin" && req.method === 'GET') || (document.role === "user" && req.method === 'PUT'))
                                next()
                            else
                                return res.json({ success: false, message: 'Access not granted' });

                        }
                    })
                }
                else
                    return res.status(403).send({
                        success: false,
                        message: 'Not authorised'
                    })
            }
        })

    }

    else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
})

router.route('/users')

    .get(function (req, res) {

        // console.log("<<<<<<<<<<<<", req.body)
        Users.find(function (err, resp) {
            if (err)
                res.status(err).send(err);
            //console.log('data----------->', resp.body);
            res.status(200).json(resp);
        })
        // }
        // };
    });


router.route('/users/:users_id')

    .put(function (req, res) {
        console.log("ROLE OF USER", roleOfUser);
        var users = new Users();
        Users.findById(req.params.users_id, function (err, resp) {
            if (err)
                res.send(err);
            console.log("----------->", resp)

            resp.name = req.body.name;

            resp.save(function (err) {

                if (err)
                    res.status(err).send(err);

                res.status(200).json({ message: "Updated" });


            });
        });

    })


    .get(function (req, res) {
        console.log("----------->", req.params.users_id)
        Users.findById(req.params.users_id, function (err, resp) {
            if (err)
                res.send(err);
            res.json(resp);
        });
    });

app.use('/api', router);
