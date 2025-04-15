// server.js
import './config/instrument.js';
import express from 'express';
import cors from "cors";
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clearkWebhooks } from './controller/webhooks.js';

// Initialize express
const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("✅ API Working"));
app.get("/debug-sentry", () => {
    throw new Error("🛠️ Sentry test error!");
});
app.post('/webhooks', clearkWebhooks);

// Setup Sentry error handler (after routes)
Sentry.setupExpressErrorHandler(app);

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
