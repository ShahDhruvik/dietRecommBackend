import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../utils/config.js';

const createHashPassword = async pass => {
  try {
    if (pass) {
      const hashPass = await bcrypt.hash(pass, Number(SALT_ROUNDS));
      return hashPass;
    }
  } catch (error) {
    return null;
  }
};

export default createHashPassword;
