import express from 'express';
import { urlencoded, json } from 'body-parser';
import Constants from './config/constants';
import morgan from 'morgan';
import {logger} from './logger';
import routes from './routes';

const app = express();
app.set('mySecret', Constants.secret);
app.use(morgan('dev'));                             
app.use(urlencoded({ extended: true }));
app.use(json());
// app.use(function(req, res, next){
//     logger.error('404 page requested');
//     //res.status(404).send('This page does not exist!');
//     next();
// });
  
app.use('/api', routes);
 logger.info('*** PORT of APP ***', Constants.port);


app.listen(Constants.port, function(){
   logger.info(`***** Example app listening on port  ${Constants.port}`);
});
// app.listen(Constants.port, (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(`my_app listening on port ${Constants.port}!`)
// })
export default app;

