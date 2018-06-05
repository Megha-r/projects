import mongoose from 'mongoose';
import Constants from './config/constants';
import {logger} from './logger';

// Use native promises
mongoose.Promise = global.Promise;
console.log(Constants.mongoDB);
// Connect to our mongo database;
mongoose.connect(Constants.mongoDB,(err) => {
  if (err) {
    logger.error('Unable to connect to mongoDB server. Error :-',err);
  }
  logger.info('Mongo DB Successfully connected');
});

