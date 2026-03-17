import { Router } from 'express';

import {
    getTeams,
    createTeams,
} from '../models/teamModel.js';

const router = Router();

router.get('/:id/members', getTeams);
router.post('/', createTeams);

export default router;
