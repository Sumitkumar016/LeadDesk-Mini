const Lead = require('../models/Lead');

const getDashboardStats = async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const newLeads = await Lead.countDocuments({ status: 'New' });
    const contactedLeads = await Lead.countDocuments({ status: 'Contacted' });
    const closedLeads = await Lead.countDocuments({ status: 'Closed' });

    res.status(200).json({
      success: true,
      stats: {
        totalLeads,
        newLeads,
        contactedLeads,
        closedLeads,
      },
    });
  } catch (error) {
    console.error('[Dashboard Stats Error]', error);
    res.status(500).json({
      success: false,
      message: 'Failed to compute dashboard metrics.',
    });
  }
};

module.exports = {getDashboardStats};
