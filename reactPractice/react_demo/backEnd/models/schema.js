
import mongoose from 'mongoose';

let  register  = new mongoose.Schema({
    u_name: {
		type:String,
		required: true,
      
	},
	u_email:{
		type:String,
		required: true,
		unique: true,
		validate: /^[a-zA-Z0-9]*[@][a-zA-Z]*[.][a-zA-Z]*/

	},    

	u_password: {
		type:String,
		required: true,
      
    },
    
    u_cpass:{
        type: String,
        required: true,
   
    }, 

});


const schema = mongoose.model('resgister', register);
export default schema;
