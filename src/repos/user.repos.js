import UserModel from '../models/user.model.js';

const createOne = async userBody => {
  try {
    const user = new UserModel(userBody);
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { createOne };
