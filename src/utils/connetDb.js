import { connect } from 'mongoose';
import { MONGO_URL } from './config.js';

const connectDb = async () => {
  try {
    await connect(MONGO_URL);
    console.log('Connected to Database');
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
