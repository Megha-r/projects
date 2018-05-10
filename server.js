//*****************************  Call the packages required********************************************/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;          // set our port
var router = express.Router();              // get an instance of the express Router


//****************************************************** DataBase ********************************************* */

var mongoDB = 'mongodb://localhost:27017/myfirstApp';

mongoose.connect(mongoDB);

var Users = require('./models/users.js');



//**************************************************  Server listening **************************************** */
app.listen(port);
console.log('Listening on port ' + port);



//**************************************************** Routes ************************************************** */

app.use('/api', router);
//router.route('/users')
router.route('/users')

    .post(function (req, res) {
        // console.log('body--->>>>>>>', req.body);
        // console.log('params--->>>>>>>', req.params);
        // console.log('query--->>>>>>>', req.query);
        var users = new Users();
        console.log("Request ", req.body.username)
        users.username = req.body.username
        users.email = req.body.email
        users.name = req.body.name
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

