import { addOne } from '../services/user.services.js';

const addOneUser = async (req, res) => {
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

export default addOneUser;
