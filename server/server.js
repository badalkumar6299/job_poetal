import './config/instrument.js'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import * as Sentry from "@sentry/node";
import { ClearkWebhooks } from './controllers/webhooks.js';

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB database
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API Working"));
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

  app.post('/webhooks',ClearkWebhooks)

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Server Setup
const PORT = process.env.PORT || 8000;

Sentry.setupExpressErrorHandler(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
