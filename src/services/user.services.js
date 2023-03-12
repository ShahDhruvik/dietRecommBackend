import { createOne, userCheck } from '../repos/user.repos.js';
import comparePassword from '../utils/comparePassword.js';
import tokenCreation from '../utils/tokenCreation.js';

const addOne = userBody => {
  try {
    const user = createOne(userBody);
    return user;
  } catch (error) {
    console.log(error);
  }
};

const logOne = async userBody => {
  try {
    const user = await userCheck(userBody);
    if (user) {
      const pass = await comparePassword(userBody.password, user.password);
      if (pass) {
        const accessToken = await tokenCreation(user.email);
        return accessToken;
      } else {
        return undefined;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export { addOne, logOne };
