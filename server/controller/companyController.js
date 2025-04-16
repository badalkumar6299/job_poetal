// controller/companyController.js
import Company from "../models/Company.js";
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import generateToken from "../utils/generateToken.js";
import Job from "../models/Job.js";

// Register Company
export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const companyExists = await Company.findOne({ email });
    if (companyExists) {
      return res.status(409).json({ success: false, message: "Company already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      folder: "company_logos"
    });

    // Clean up local image after upload
    fs.unlink(imageFile.path, (err) => {
      if (err) console.error("🧹 Failed to delete local image:", err.message);
    });

    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      Image: imageUpload.secure_url,
    });

    res.status(201).json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.Image
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    console.error("❌ Company registration error:", error.message);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
};

// Login Company
export const loginCompany = async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await Company.findOne({ email });
    if (company && await bcrypt.compare(password, company.password)) {
      res.status(200).json({
        success: true,
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          image: company.Image
        },
        token: generateToken(company._id)
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get Company Data
export const getCompanyData = async (req, res) => {
  try {
    const company = await Company.findById(req.company._id).select('-password');
    if (!company) {
      return res.status(404).json({ success: false, message: "Company not found" });
    }
    res.status(200).json({ success: true, company });
  } catch (error) {
    console.error("❌ Get company data error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Post Job
export const postJob = async (req, res) => {
  const { title, description, location, salary, level, category } = req.body;
  const companyId = req.company._id;

  if (!title || !description || !location || !salary || !level || !category) {
    return res.status(400).json({ success: false, message: "Missing job fields" });
  }

  try {
    const job = await Job.create({
      title,
      description,
      location,
      salary,
      category,
      level,
      date: Date.now(),
      visible: true,
      companyId,
    });

    res.status(201).json({ success: true, job });
  } catch (error) {
    console.error("❌ Job post error:", error.message);
    res.status(500).json({ success: false, message: "Server error while posting job" });
  }
};
