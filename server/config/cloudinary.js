// config/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';

const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
    console.log('📡 Cloudinary connected successfully!');
  } catch (err) {
    console.error('❌ Cloudinary connection failed:', err.message);
  }
};

export default connectCloudinary;
