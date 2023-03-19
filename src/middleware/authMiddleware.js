import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '../utils/config.js';

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const access = jwt.verify(token, String(PRIVATE_KEY));
      console.log(access);
      req.user = access;
      console.log(req);
    } else {
      res.status(200).json({ message: 'Authenticate first' });
    }
    next();
  } catch (error) {
    res.status(200).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
