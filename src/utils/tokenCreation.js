import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '../utils/config.js';

const tokenCreation = async email => {
  try {
    if (email) {
      var token = jwt.sign({ email }, String(PRIVATE_KEY), {
        expiresIn: '24h',
      });
      return token;
    }
  } catch (error) {
    return null;
  }
};

export default tokenCreation;
