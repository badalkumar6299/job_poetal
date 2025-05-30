import express from 'express';
import { getJobs, getJobById } from '../controller/jobcontroller.js';

const router = express.Router();

// Route to get all jobs
router.get('/', getJobs);

// Route to get a single job by ID
router.get('/:id', getJobById);

export default router;
