import mongoose from 'mongoose';
import {users} from './models/Test'
import { connect } from 'mongoose';
import Constants from './config/constants';

// Use native promises
mongoose.Promise = global.Promise;
console.log(Constants.mongoDB)
// Connect to our mongo database;
mongoose.connect(Constants.mongoDB, {
  // useMongoClient: true,
  /* other options */
}, (err) => {
  if (err) {
    throw err;
  }
  console.log('Mongo DB Successfully connected');
});

