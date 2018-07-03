import { UserMethods } from './methods';
import resgisterUsers from '../../models/schema';
import BaseHelper from '../../base';


class UserController extends UserMethods{

    userCreate = async (req,res) => {
        try {
            //console.log('body::::::::::::::', req.body);
            const { u_name, u_email, u_password } = req.body;
            const user = {  u_name, 
                            u_email,
                            u_password,
                         
            };
            console.log("CREATE USER-------->",req.body);
            const response = await this.createUser(user);
            res.status(200).json({ message:"Unique id of user created by mongo", response: user });
            //TODO handle success response
        } catch(err) {
            res.status(500).send(err);
            //TODO handle error response
        }
        
    };


    userFetch = async (req,res) => {
        try{
               const respon = await this.read();
               console.log("Response is ++++>",respon);
               res.status(200).json({message:"User Data", respon})
        }
        catch(err){
         res.status(500).send(err);
  
        }
    }
 
}
export default new UserController();