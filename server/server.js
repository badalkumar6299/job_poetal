import './config/instrument.js'
import express from 'express';
import cors from "cors";
import 'dotenv/config';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { clearkWebhooks } from './controller/webhooks.js';

// Initialize express
const app = express();

// Connect to MongoDB database
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API Working"));
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
  
app.post('/webhooks',clearkWebhooks)
// Port
const port = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
