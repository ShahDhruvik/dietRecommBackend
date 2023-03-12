import express from 'express';
import UserRoutes from '../routes/user.routes.js';

const router = express.Router();

router.use('/user', UserRoutes);
export default router;
