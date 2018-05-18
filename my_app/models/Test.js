//let mongoose = require('mongoose');

 import mongoose from 'mongoose';

let  usersSchema   = new mongoose.Schema({
	username:{
		type:String,
		required: true,
		unique: true,
		validate: /^[a-zA-Z0-9]*[0-9]+[a-zA-Z0-9]*/
		// validate: usernameValidator
        
	}, 
	email:{
		type:String,
		required: true,
		unique: true,
		validate: /^[a-zA-Z0-9]*[@][a-zA-Z]*[.][a-zA-Z]*/

	},    
	name: {
		type:String,
		required: true,
      
	},
	password: {
		type:String,
		required: true,
      
	},
	role: {
		type:String,
		required: true,
       
	},
	admin: Boolean
});


export const Users = mongoose.model('users', usersSchema);
