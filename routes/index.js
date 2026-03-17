import { Router } from "express";

import authRouter from './authRoutes.js';
import taskRouter from './taskRoutes.js';
import teamRouter from './teamRoutes.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/tasks', taskRouter);
router.use('/teams', teamRouter);

export default router;
