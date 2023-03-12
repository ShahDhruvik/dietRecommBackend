import express from 'express';
import UserController from '../controller/user.controller.js';
import UserSchema from '../schemaValidation/user.validation.js';
import validate from '../middleware/validationMiddleware.js';

const router = express.Router();

router.post('/register', validate(UserSchema), UserController.register);
router.post('/login', UserController.login);

export default router;
