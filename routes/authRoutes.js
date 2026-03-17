import { Router } from 'express';


import {
    createUser,
} from '../models/userModel.js';

const router = Router();

router.post('/register', createUser);

export default router;
