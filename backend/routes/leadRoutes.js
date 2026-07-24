const express = require('express');
const { body } = require('express-validator');
const {
  createLead,
  getLeads,
  updateLeadStatus,
} = require('../controllers/leadController');
const { protect } = require('../middleware/authMiddleware');
const { validate } = require('../middleware/validatorMiddleware');

const router = express.Router();

// POST /api/leads - Public Lead Form submission
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Full Name is required'),
    body('email').trim().isEmail().withMessage('Please provide a valid email address'),
    body('budget')
      .notEmpty()
      .withMessage('Budget is required')
      .isFloat({ min: 0 })
      .withMessage('Budget cannot be negative'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  validate,
  createLead
);

// GET /api/leads - Admin get all leads (search & status query params)
router.get('/', protect, getLeads);

// PATCH /api/leads/:id/status - Admin update lead status
router.patch(
  '/:id/status',
  protect,
  [
    body('status')
      .isIn(['New', 'Contacted', 'Closed'])
      .withMessage('Status must be New, Contacted, or Closed'),
  ],
  validate,
  updateLeadStatus
);

module.exports = router;
