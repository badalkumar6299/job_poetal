// routes/companyRoutes.js
import express from 'express';
import {
  registerCompany,
  loginCompany,
  getCompanyData,
  postJob,
  // Add others when implemented
  // getCompanyJobApplicants,
  // getCompanyPostedJobs,
  // changeJobApplicationStatus,
  // changeVisibility
} from '../controller/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middleware/authMiddleware.js';

const router = express.Router();

// Register a company
router.post('/register', upload.single('image'), registerCompany);

// Login
router.post('/login', loginCompany);

// Protected routes
router.get('/company', protectCompany, getCompanyData);
router.post('/post-Job', protectCompany, postJob);

// Uncomment when implemented
// router.get('/applicants', protectCompany, getCompanyJobApplicants);
// router.get('/list-jobs', protectCompany, getCompanyPostedJobs);
// router.post('/change-status', protectCompany, changeJobApplicationStatus);
// router.post('/change-visibility', protectCompany, changeVisibility);

export default router;
