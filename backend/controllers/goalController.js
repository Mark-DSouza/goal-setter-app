// @desc    Get goals
// @route   /api/v1/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get goals"
  });
};

// @desc    Set goals
// @route   /api/v1/goals
// @access  Private
const setGoal = (req, res) => {
  res.status(200).json({
    message: "Set goal"
  });
};

// @desc    Update goals
// @route   /api/v1/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`
  });
};

// @desc    Delete goals
// @route   /api/v1/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`
  });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}
