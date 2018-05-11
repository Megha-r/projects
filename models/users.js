var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var usersSchema   = new Schema({
    username: String,
    email: String,
    name: String,
    password: String,
    admin: Boolean
});

// );
module.exports = mongoose.model('Users', usersSchema);