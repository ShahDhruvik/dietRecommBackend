import express from 'express';
import UserController from '../controller/user.controller.js';
import UserSchema from '../schemaValidation/user.validation.js';
import validate from '../middleware/validationMiddleware.js';
import Auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', validate(UserSchema), UserController.register);
router.post('/login', UserController.login);
router.get('/getHello', Auth, (req, res) => {
  //   console.log(req.headers['authorization'].split(' ')[1]);
  res.send('hello');
});

export default router;
