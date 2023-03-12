import UserModel from '../models/user.model.js';
import createHashPassword from '../utils/hashingPassword.js';

const createOne = async userBody => {
  try {
    console.log(userBody.password);
    const hashedPass = await createHashPassword(userBody.password);
    userBody.password = hashedPass;
    userBody.confirmPassword = hashedPass;
    const user = new UserModel(userBody);
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

const userCheck = async userBody => {
  try {
    const user = await UserModel.findOne({ email: userBody.email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export { createOne, userCheck };
