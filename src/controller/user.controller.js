import { addOne, logOne } from '../services/user.services.js';

const register = async (req, res) => {
  try {
    const userBody = req.body;
    const user = await addOne(userBody);
    if (user) {
      res.status(200).json({ message: 'Created' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    const userBody = req.body;
    const user = await logOne(userBody);
    if (user === null) {
      res.status(404).json({ message: 'Please check the  email' });
    } else if (user === undefined) {
      res.status(200).json({ message: 'Please check the password ' });
    } else {
      res.status(200).json({ AccessToken: user });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default { register, login };
