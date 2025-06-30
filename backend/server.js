const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ------------------ AUTH ------------------
app.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const checkUserSql = "SELECT * FROM users WHERE username = ?";
  const insertUserSql = "INSERT INTO users (username, password, role) VALUES (?, ?, ?)";

  try {
    const [existing] = await db.query(checkUserSql, [username]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    await db.query(insertUserSql, [username, hashedPassword, role]);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "SELECT * FROM users WHERE username = ?";
  try {
    const [results] = await db.query(sql, [username]);
    if (results.length === 0) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token, username: user.username, role: user.role });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

// ------------------ EMAIL ------------------
const getEmailCredentials = (username) => {
  const creds = {
    balais: {
      user: process.env.EMAIL_BALIAS_USER,
      pass: process.env.EMAIL_BALIAS_PASS,
    },
    cacho: {
      user: process.env.EMAIL_CACHO_USER,
      pass: process.env.EMAIL_CACHO_PASS,
    },
    francisco: {
      user: process.env.EMAIL_FRANCISCO_USER,
      pass: process.env.EMAIL_FRANCISCO_PASS,
    },
    galve: {
      user: process.env.EMAIL_GALVE_USER,
      pass: process.env.EMAIL_GALVE_PASS,
    },
    tarroza: {
      user: process.env.EMAIL_TARROZA_USER,
      pass: process.env.EMAIL_TARROZA_PASS,
    },
  };
  return creds[username.toLowerCase()];
};

app.post("/api/send-email", async (req, res) => {
  const { to, subject, message, sender } = req.body;
  const creds = getEmailCredentials(sender);

  if (!creds) {
    return res.status(400).json({ message: "Invalid sender or credentials missing" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: creds.user,
        pass: creds.pass,
      },
    });

    const mailOptions = {
      from: creds.user,
      to,
      subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    await db.execute(
      "INSERT INTO email_logs (sender, recipient, subject, message, sent_at) VALUES (?, ?, ?, ?, NOW())",
      [sender, to, subject, message]
    );

    res.json({ success: true, message: "Email sent and logged!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send the email" });
  }
});

// ------------------ SERVER START ------------------
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});