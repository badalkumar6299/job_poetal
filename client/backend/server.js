import "dotenv/config";
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.message);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

// Register Endpoint
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "❌ Registration Failed" });
    }
    res.json({ message: "✅ User Registered Successfully" });
  });
});

// Start Server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
