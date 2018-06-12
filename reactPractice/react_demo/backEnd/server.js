import express from 'express';
import { urlencoded, json } from 'body-parser';
import Constants from './config/constants';
import morgan from 'morgan';
import {logger} from './logger';
import routes from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.set('mySecret', Constants.secret);
app.use(morgan('dev'));                             
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
//app.use(json());
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

