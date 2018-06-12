import registerUsers from "../../models/schema.js";
// import { resolve } from "dns";
// import { rejects } from "assert";
import { logger } from "../../logger";

let result;
export class UserMethods {
    
    create = async (user) => {
        try{
        //console.log('user data::::::::::::::::::', user)
        return await registerUsers.create(user);
        }
        catch(err)
        {
            logger.error("Err-----", err);
        }
    };


    read = async () => {
      try {
           const respon = await registerUsers.find({})
            return respon;
            }
            catch (err){
                logger.error ("Err--->>>>>",err)
            }
       };
 }
