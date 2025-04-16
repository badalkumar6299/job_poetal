// server.js
import './config/instrument.js';
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import connectDB from './config/db.js';
import * as Sentry from '@sentry/node';
import { clearkWebhooks } from './controller/webhooks.js';
import companyRoutes from './routes/companyRoutes.js';
import connectCloudinary from './config/cloudinary.js';
import jobRoutes from './routes/jobRoutes.js'

// Initialize express
const app = express();

// Ensure 'uploads' folder exists
const uploadPath = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Connect to MongoDB and Cloudinary
await connectDB();
await connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve static uploaded files

// Routes
app.get('/', (req, res) => res.send('✅ API Working'));
app.get('/debug-sentry', () => {
  throw new Error('🛠️ Sentry test error!');
});
app.post('/webhooks', clearkWebhooks);
app.use('/api/company', companyRoutes);
app.use('/api/jobs',jobRoutes)

// Sentry error handler
Sentry.setupExpressErrorHandler(app);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
