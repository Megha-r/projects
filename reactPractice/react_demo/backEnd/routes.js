import  Router  from 'express';
import UserController from './controllers/users/controllers';


const router = new Router();
router.route('/register').post(UserController.userCreate);
router.route('/registered').get(UserController.userFetch);
console.log('---------');

export default router;
