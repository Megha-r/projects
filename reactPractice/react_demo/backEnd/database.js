import mongoose from 'mongoose';
import Constants from './config/constants';
import {logger} from './logger';

// Use native promises
mongoose.Promise = global.Promise;
let url;


if(process.env.NODE_ENV !== 'prod'){
require('dotenv').load();
url = Constants.mongoDB_test;
}
else
url = Constants.mongoDB;
console.log(Constants.mongoDB);
// Connect to our mongo database;
mongoose.connect(url,(err) => {
  if (err) {
    logger.error('Unable to connect to mongoDB server. Error :-',err);
  }
  logger.info('Mongo DB Successfully connected');
  logger.info('-------*************--------', process.env.PORT);
});

