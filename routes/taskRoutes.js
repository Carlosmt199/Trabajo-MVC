import { Router } from 'express';

import {
    getTask,
    createTask,
    updateTask,
    deleteTask
} from '../models/taskModel.js';

const router = Router();

router.get('/', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
