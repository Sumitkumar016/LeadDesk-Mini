const Lead = require('../models/Lead');

const createLead = async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    const lead = await Lead.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      budget: Number(budget),
      message: message.trim(),
      status: 'New',
    });

    res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been submitted successfully.',
      lead,
    });
  } catch (error) {
    console.error('[Create Lead Error]', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit lead inquiry. Please try again.',
    });
  }
};


const getLeads = async (req, res) => {
  try {
    const { search, status } = req.query;

    let query = {};

    // Filter by status if provided and not 'All'
    if (status && status !== 'All') {
      query.status = status;
    }

    // Search by Name, Email, Message, or Status
    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { message: searchRegex },
        { status: searchRegex },
      ];
    }

    const leads = await Lead.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error('[Get Leads Error]', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch leads list.',
    });
  }
};

const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const lead = await Lead.findById(id);
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead record not found.',
      });
    }

    if (status) {
      if (!['New', 'Contacted', 'Closed'].includes(status)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid status value. Must be New, Contacted, or Closed.',
        });
      }
      lead.status = status;
    }

    if (notes !== undefined) {
      lead.notes = notes.trim();
    }

    await lead.save();

    res.status(200).json({
      success: true,
      message: 'Lead updated successfully',
      lead,
    });
  } catch (error) {
    console.error('[Update Lead Status Error]', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update lead status.',
    });
  }
};

module.exports = {createLead, getLeads, updateLeadStatus};
