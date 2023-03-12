import express from 'express';
import UserController from '../controller/user.controller.js';
import UserSchemaValidation from '../schemaValidation/user.validation.js';

const router = express.Router();

router.post('/register', UserController);
export default router;
