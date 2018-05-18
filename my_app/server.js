import express from 'express';
import { urlencoded, json } from 'body-parser';
import Constants from './config/constants';
import morgan from 'morgan';
import routes from './routes';

const app = express();
app.set('mySecret', Constants.secret);
app.use(morgan('dev'));                             
app.use(urlencoded({ extended: true }));
app.use(json());
app.use('/api', routes);
console.log("PORT of APPP", Constants.port);
app.listen(Constants.port, (err) => {
    if(err) {
        console.log(err);
    }
    console.log(`my_app listening on port ${Constants.port}!`)
})
export default app;
