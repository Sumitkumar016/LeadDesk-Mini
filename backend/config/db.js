const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/leaddesk_mini';
    const conn = await mongoose.connect(mongoUri);
    
    // Seed default admin if no admin exists
    await seedDefaultAdmin();
  } catch (error) {
    console.error(`[MongoDB Error] Connection failed: ${error.message}`);
  }
};

const seedDefaultAdmin = async () => {
  try {
    const Admin = require('../models/Admin');
    const existingAdminCount = await Admin.countDocuments();
    
    if (existingAdminCount === 0) {
      const email = process.env.ADMIN_EMAIL || 'admin@leaddesk.com';
      const rawPassword = process.env.ADMIN_PASSWORD || 'admin123';
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(rawPassword, salt);
      
      await Admin.create({
        email: email.toLowerCase(),
        password: hashedPassword,
      });
      
      console.log(`[Admin Seeded] Default admin account created: ${email} / (password from env or 'admin123')`);
    }
  } catch (err) {
    console.error('[Admin Seed Error]', err.message);
  }
};

module.exports = connectDB;
