import { createOne } from '../repos/user.repos.js';

const addOne = userBody => {
  try {
    const user = createOne(userBody);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { addOne };
